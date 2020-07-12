/*
  Static comments for Editorial, compiled/revised by Middle Bear
  middlebear.org | github.com/middlebear
  Free for personal and commercial use under the CCA 3.0 license (/license.txt
  and http://creativecommons.org/licenses/by/3.0/)
  
  from: https://github.com/eduardoboucas/popcorn/blob/gh-pages/js/main.js
  via:  https://mademistakes.com/articles/improving-jekyll-static-comments/
  and   https://spinningnumbers.org/a/staticman-heroku.html
  and   https://travisdowns.github.io/blog/2020/02/05/now-with-comments.html
*/

(function ($) {
  var $comments = $('.js-comments');

  $('.js-form').submit(function () {
    var form = this;

    $(form).addClass('disabled');
    //Spinner from Travis Downs and MadeMistakes
    $('#comment-form-submit').html('<i class="fas fa-spinner fa-spin fa-fw"></i>  Submitting');

    $.ajax({
      type: $(this).attr('method'),
      url:  $(this).attr('action'),
      data: $(this).serialize(),
      contentType: 'application/x-www-form-urlencoded',
      success: function (data) {
        showModal('Comment submitted', 'Thanks! Your comment is pending. It will appear when approved.');
        //Spinner
        $('#comment-form-submit').html('Submit');
        // $(form)[0].reset();   // clear contents of form after submit
        $(form).removeClass('disabled');
        // grecaptcha.reset();
      },
      error: function (err) {
        console.log(err);
        //Spinner
        var ecode = (err.responseJSON || {}).errorCode || "unknown";
        showModal('Error', 'An error occured.<br>[' + ecode + ']');
        $('#comment-form-submit').html('Submit');
        $(form).removeClass('disabled');
        // grecaptcha.reset();
      }
    });
    return false;
  });

  $('.js-close-modal').click(function () {
    $('body').removeClass('show-modal');
  });

  function showModal(title, message) {
    $('.js-modal-title').text(title);
    $('.js-modal-text').html(message);
    $('body').addClass('show-modal');
  }
})(jQuery);

// jquary version of moving form - incomplete: need to reset form/reply button after completion/cancel
// var replyButtons  = $('.js-reply.button');
// var commentForm   = $('.js-form.comment-form');
// var cancelButton  = $('#cancel-comment-reply-link');
// replyButtons.on('click', function () {
//   comment = $(this).closest('article.js-comment');
//   $(this).after(commentForm);
//   $(this).replaceWith(cancelButton);
//   commentForm.children('#comment-parent-id').val(comment.attr('data-id'));
//   console.log('data id: '+comment.attr('data-id'));
//   console.log(comment);
//   console.log(commentForm);
//   console.log('hidden parent id: '+commentForm.children('#comment-parent-id').val());
// });

/*
  Staticman comment replies for Editorial, refactored by Middle Bear
  middlebear.org | github.com/middlebear
  Released under the GNU General Public License - https://wordpress.org/about/gpl/
  as per the original Wordpress licensing
  
  from: https://github.com/mmistakes/made-mistakes-jekyll
  via:  https://core.svn.wordpress.org/trunk/wp-includes/js/comment-reply.js
  and   https://spinningnumbers.org/a/staticman-heroku.html
  and   https://travisdowns.github.io/blog/2020/02/05/now-with-comments.html
*/

// addComment.moveForm is called from comment.html when the reply link is clicked.
// modified to add and use event listeners rather than `onclick` attributes
var addComment = {
  moveForm: function(commentId, parentId, commentFormDivId, pageSlug, placeAfterThisClass, parentUuid) {
    var div, element, style, cssHidden,
    t               = this,                                     // t is the addComment object, with functions moveForm and I, and variable commentFormDivId
    comment         = t.I(commentId),                           // whole comment
    commentFormDiv  = t.I(commentFormDivId),                    // whole new comment form
    cancel          = t.I('cancel-comment-reply-link'),         // whole reply cancel link
    parent          = t.I('comment-parent-id'),                 // hidden element for long id of parent comment
    parentFragment  = t.I('comment-parent-fragment'),           // hidden element for link fragment to parent
    post            = t.I('comment-post-slug'),                 // null
    commentForm     = commentFormDiv.getElementsByTagName('form')[0];  // the <form> part of the comment_form div

    if ( ! comment || ! commentFormDiv || ! cancel || ! parent || ! parentFragment || ! commentForm) { return; }
    t.commentFormDivId = commentFormDivId;
    pageSlug = pageSlug || false;

    // create and insert a bookmark div right before comment form
    if ( ! t.I('sm-temp-form-div')) {
      div               = document.createElement('div');
      div.id            = 'sm-temp-form-div';
      div.style.display = 'none';
      commentFormDiv.parentNode.insertBefore(div, commentFormDiv);
    }

    var placeAfterThisElement = comment.querySelector(placeAfterThisClass);
    placeAfterThisElement.insertAdjacentElement('afterend', commentFormDiv);  // move form from bottom to just after the comment child element with placeAfterThisClass
    // comment.parentNode.insertBefore(commentFormDiv, comment.nextSibling);  // move the form from the bottom to above the next sibling
    if (post && pageSlug) { post.value = pageSlug; }
    parent.value = parentUuid;
    parentFragment.value = commentId;
    cancel.style.display = '';                                  // make the cancel link visible

    cancel.onclick = function() {
      var t           = addComment,
      temp            = t.I('sm-temp-form-div'),                // temp is the original bookmark
      commentFormDiv  = t.I(t.commentFormDivId);                // commentFormDiv is the comment form

      if ( ! temp || ! commentFormDiv) { return; }

      t.I('comment-parent-id').value = null;                    // forget the parent of the comment
      t.I('comment-parent-fragment').value = null;              // forget the parent link of the comment
      temp.parentNode.insertBefore(commentFormDiv, temp);       // move the comment form to its original location
      temp.parentNode.removeChild(temp);                        // remove the bookmark div
      this.style.display = 'none';                              // make the cancel link invisible
      this.onclick = null;                                      // retire the onclick handler
      return false;
    };

    /*
     * Set initial focus to the first form focusable element.
     * Try/catch used just to avoid errors in IE 7- which return visibility
     * 'inherit' when the visibility value is inherited from an ancestor.
     */
    try {
      for (var i = 0; i < commentForm.elements.length; i++) {
        element = commentForm.elements[i];
        cssHidden = false;

        // Modern browsers.
        if ('getComputedStyle' in window) {
          style = window.getComputedStyle(element);
        // IE 8.
        } else if (document.documentElement.currentStyle) {
          style = element.currentStyle;
        }

      /*
       * For display none, do the same thing jQuery does. For visibility,
       * check the element computed style since browsers are already doing
       * the job for us. In fact, the visibility computed style is the actual
       * computed value and already takes into account the element ancestors.
       */
        if ((element.offsetWidth <= 0 && element.offsetHeight <= 0) || style.visibility === 'hidden') {
          cssHidden = true;
        }
        if ('hidden' === element.type || element.disabled || cssHidden) { continue; }
        element.focus();
        break;                                                  // Stop after the first focusable element.
      }

    } catch(er) {}

    return false;
  },

  I: function(id) { return document.getElementById(id); }
};

// Attach event listeners to reply buttons, rather than including tem in the html - Middlebear
document.querySelectorAll(".js-reply.button").forEach(function(el) {
  // must use block-scoped vars ('let', not 'var') here for returned function to have customized values
  let commentId = el.closest('.js-comment').id,
  parentId      = el.closest('.js-comment').closest('article').id,
  parentUuid    = el.closest('.js-comment').closest('article').getAttribute('data-id'),
  pageSlug      = document.querySelector('#comment-form input[name="options[slug]"]').value;

  el.addEventListener('click', function(e) {
    // e.preventDefault();
    return addComment.moveForm(commentId, parentId, 'comment-form', pageSlug, '.actions', parentUuid); // edit strings for commentFormDivId and placeAfterThisClass here as needed
  });
});
