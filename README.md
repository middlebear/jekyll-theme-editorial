# Editorial, a Jekyll theme

Editorial is a Jekyllized version of the [Editorial template](https://html5up.net/editorial) by [HTML5 UP](https://html5up.net/) and converted into a Jekyll theme by [Middle Bear](https://middlebear.org/). The design hints toward a newpaper-like blog with big page banners and slab serif headlines. It features a prominent collapsible memu sidebar that houses navigation, contact information, the footer, and other components, while also accentuating the main content front and center.

## Introduction

This is my first attempt at a Jekyll theme. I made it mainly to learn Jekyll and create a useful theme for myself from a pre-existing and freely-modifiable design. It was fun and seemed like it could be useful to others, so it's been packaged up as a theme gem. There is a lot of cleanup work that could be done on the code, especially around documentation and integrations. 

Here are some basic principles I attempted to adhere to:

  1. No external dependencies by default
    * Google
    * Disqus
    * Third-party form handlers
  2. Componentized as much as possible
    * Meaning lots of includes
    * Could use some refactoring in places
  3. Works on Github Pages by default
    * For other hosting platforms, extended functionality from plugins not integrated into Github Pages also work out-of-the-box, for a handful of plugins


## Quick Start

### Create a new Jekyll site, if you don't already have one

Note that `:~$` is the shell prompt, so copy and paste the bits *after* that (and the 2 lines in the middle represent the `jekyll` command's output):

```
:~$ jekyll new my-jekyll-site
... a bunch of output from Jekyll ...
New jekyll site installed in ~/my-jekyll-site.
:~$ cd my-jekyll-site
```

This will create the basic structure of your Jekyll site with all the default files in the subdirectory `my-jekyll-site` (you don't have to, and shouldn't, create this subdirectory beforehand).

You can then run it to see the default site in your browser (`:~/my-jekyll-site$` is the shell prompt, so don't copy that part):

```
:~/my-jekyll-site$ bundle exec jekyll serve
```

Point your browser to `http://localhost:4000/` and you should see a bare site with one post ("Welcome to Jekyll!") using the default Minima theme.

### Add the Editorial theme to your Jekyll site
Add this line to your Jekyll site's `Gemfile` (and optionally remove `gem "minima"`):

```ruby
gem "jekyll-theme-editorial"
```
And add this line to your Jekyll site's `_config.yml` in the `Gemfile` (if it's a freshly created Jekyll site, replace the line `theme: minima`):

```yaml
theme: jekyll-theme-editorial
```

And then to download and make it available to your site, execute:

    :~/my-jekyll-site$ bundle

Or directly install it yourself as:

    :~/my-jekyll-site$ gem install jekyll-theme-editorial

Then run `bundle exec jekyll serve` (or the shorter `jekyll s` if your setup allows) to see the site so far.

Unless you already had content likes posts and an index file, you'll be staring at largely a blank page, along with a collapsible left menu sidebar and site header, at this point. That's ok, move on to the next section!

## Extended Setup Tutorial

This section demonstrates the various features of the Editorial theme in a tutorial format. You'll learn how to include and configure the various features  by re-creating Editorial's demo site.

### Create/edit the index page

Jekyll's initial `index.markdown` file is blank, only specifying a `home` layout in its front matter (the yaml section at the top between the two `---` lines):

```markdown
---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

```
To replicate the basic theme home page, replace this file with the following:

```markdown
---
layout:               home
body_class:           home
title:                "Hi, I’m Editorial<br /> by HTML5 UP & Middle Bear"
subtitle:             My overridden site.tagline
description:          "Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam."
banner:
  url:                "/about"
  link_title:         "Read About Editorial"
  button_text:        "Learn More"
images:
  banner:
    file:             "pic10.jpg"
    alt_text:         "Photo of a woman's torso holding a book and wearing a sleeveless top showing the tatoos along her right arm."
    title:            "photo: Annie Spratt, https://unsplash.com/photos/DYROsn8AyDI/"
# NOTE: features are set in `/_data/features.yml`
---

<!-- Responsive Banner -->
{%-include responsive_banner.html-%}

<!-- Section - Features -->
{%-include features.html section_title="Cool Features"-%}

<!-- Section - Articles -->
{%-include articles.html section_title="Neat Articles"-%}

```

This adds three includes (`responsive_banner.html`, `features.html`, and `articles.html`) to the home page. The added yaml front matter is mainly there to configure the banner, although the `title` and `subtitle` keys can be used by the jekyll-seo-tag, for instance.

This index page is the root page of your site by default, and uses the special `home` layout from the theme. The `home` layout is generally only used by this index page, so that your homepage can have a unique feel and design. If you wish to change this layout, copy the file `_layouts/home.html` from the theme gem (or copy/download it from the Github repository for the theme gem) to your site's `~/my-jekyll-site/_layouts/home.html` file.

At this point, you may also want to change the name of this file from `index.markdown` to the shorter and more conventional `index.md`.

Assuming you left `jekyll serve` running, efresh your browser (on `http://localhost:4000/`) to see the changes so far. You should see a banner with an image, an empty Features section, and an Articles section with one post, "Welcome to Jekyll!".

#### Change the site title/subtitle

The title and subtitle of the site is configured by the site's `_config.yml` file, since this is usually a one-time configuration at the start of creating your site. Find this line in `_config.yml`:

``` yaml
title: Your awesome title
```

and change it as you wish. Notice that the subtitle doesn't appear anywhere in this file. That's because it's inherited from the Editorial theme's configuration file, when the value is absent in your site's config file. Add the following line (typically, you'd place this right under the `title` key to group these together), changing the value as you desire:

```yaml
subtitle: by me and Middlebear
```

As the default introductory comments in `_config.yml` note, you have to restart the jekyll server for site configuration changes (changes to this file only) to be applied. First, quit the running jekyll server by pressing `ctrl-c`, and restart it again with the same command (or `bundle exec jekyll serve` if necessary):

```
:~/my-jekyll-site$ jekyll s
```
Refresh your browser page (on `http://localhost:4000/`) to see the changes you made at the top of the page in the site header area.

#### Add Features

Features are simple components composed of an icon, a title, and some descriptive text. These are defined in a site data file, `~/my-jekyll-site/_data/features.yml`. To see how it works, copy the following into that file (creating the `_data` directory along the way, if necessary):

```yaml
- name: "Fully <em>Responsive</em>"
  description: Works on a range of devices and screen sizes, with a automatically collapsing menu sidebar at smaller sizes.
  icon: solid fa-laptop-code
- name: Built on <em>HTML5 + CSS3</em>
  description: Uses modern browser capabilities to reduce reliance on Javascript while delivering awesome features.
  icon: solid fa-code
- name: Super <em>Customizable</em>
  description: Beyond content, theme elements can be configured, and even removed entirely, using site config variables or Jekyll front matter.
  icon: solid fa-cog
- name: <em>100% Free</em> under the <a href="/LICENSE.txt">Creative Commons</a>
  description: Following HTML5 UP's <a href="https://html5up.net/license">original license</a>, the Editorial Jekyll theme is licensed under the <a href="http://creativecommons.org/licenses/by/3.0/">CC Attribution 3.0 license</a>.
  icon: solid fa-gift
```

Note that the `name` and `description` keys can incorporate html (but not Liquid filters/tags). The `icon` key is the class name(s) for the desired [Font Awesome](https://fontawesome.com/icons?d=gallery&m=free) icon. The free Font Awesome icons are divided into `regular`, `solid`, and `brand` variants. The `regular` icons need only a single class value (e.g., `fa-address-book`), but `solid` (e.g., `solid fa-address-book`) and `brand` (e.g., `brand fa-500px`) variants require adding `solid` or `brand` respectively to the class names for the `icon` key.

Now refresh the home page again, and you should see the 4 features you added show up in the Features section.

### Add the site navigation menu

The sitewide navigation menu lives in the left sidebar, under the appropriately-named "Menu" header. Menu configuration is done via another yaml data file, `~/my-jekyll-site/_data/menus.yml`:

```yaml
sidebar:
  - url:        /
    title:      Home
    identifier: home
  - url:        /about
    title:      About
    identifier: about
  - url:        /elements
    title:      Elements
    identifier: elements
  - url:        /posts
    title:      Recent Posts
    identifier: posts
  - url:        /archives
    title:      Archives
    identifier: archives
  - url:        /categories
    title:      Categories
    identifier: categories
  - url:        /tags
    title:      Tags
    identifier: tags
  - url:        /projects
    title:      Projects
    identifier: projects
  - url:        /people
    title:      Authors
    identifier: authors
  - url:        /signin
    title:      Sign In
    identifier: signin
```

Note that, for compatibility, this is the same basic format employed by the [jekyll-menus plugin](https://github.com/forestryio/jekyll-menus) plugin. However, the Editorial theme's basic menu system doesn't use the `weight` key for ordering entries as `jeyll-menus` does.

Refresh the page, and you should now see the menu items populated under the "Menu" header. Since most of these pages don't yet exist at this point, they'll show the "404 Not Found" message.

### Add social media links

Social media links are also configured via a yaml file. Save the following yaml to the file, `~/my-jekyll-site/_data/social.yml`:

```yaml
# Social: use at most 7; remove or comment out the handle for the others
#         Reorder these here to suit your desired order on the page
#         Capitalize labels to suit your preferences
#         URL patterns here should be correct, but be sure to test them
#         Icons are `icon brands` + the fontawsome class names to be used
github:
  label:    Github
  handle:   middlebear
  pattern:  https://github.com/%s
  icon:     icon brands fa-github
gravatar:
  label:    Gravatar
  handle:   middlebear2
  pattern:  https://gravatar.com/%s
  icon:     icon brands fa-google fa-rotate-270
rubygems:
  label:    RubyGems
  handle:   middlebear
  pattern:  https://rubygems.org/profiles/%s
  icon:     icon fa-gem
twitter:
  label:    Middlebear Twitter
  handle:   middlebear2
  pattern:  https://twitter.com/%s
  icon:     icon brands fa-twitter
twitter2:
  label:    Jekyll Twitter
  handle:   jekyllrb
  pattern:  https://twitter.com/%s
  icon:     icon brands fa-twitter
medium:
  label:    Medium
  handle:   jekyll
  pattern:  https://medium.com/@%s
  icon:     icon brands fa-medium-m
facebook:
  label:    Facebook
  handle:   # jekyll
  pattern:  https://www.facebook.com/%s
  icon:     icon brands fa-facebook-f
linkedin:
  label:    LinkedIn
  handle:   # jekyll
  pattern:  https://www.linkedin.com/in/%s
  icon:     icon brands fa-linkedin
instagram:
  label:    Instagram
  handle:   jekyll
  pattern:  https://www.instagram.com/%s
  icon:     icon brands fa-instagram
snapchat:
  label:    Snapchat
  handle:   # jekyll
  pattern:  https://www.snapchat.com/add/%s
  icon:     icon brands fa-snapchat-ghost
gitlab:
  label:    Gitlab
  handle:   # jekyll
  pattern:  https://gitlab.com/%s
  icon:     icon brands fa-gitlab
keybase:
  label:    Keybase
  handle:   # jekyll
  pattern:  https://keybase.io/%s
  icon:     icon brands fa-keybase
500px:
  label:    500px
  handle:   # jekyll
  pattern:  https://500px.com/%s
  icon:     icon brands fa-500px
flickr:
  label:    Flickr
  handle:   # jekyll
  pattern:  https://www.flickr.com/photos/%s
  icon:     icon brands fa-flickr
pinterest:
  label:    Pinterest
  handle:   # jekyll
  pattern:  https://www.pinterest.com/%s/
  icon:     icon brands fa-pinterest
dribbble:
  label:    Dribbble
  handle:   # jekyll
  pattern:  https://dribbble.com/%s/collections
  icon:     icon brands fa-dribbble
behance:
  label:    Behance
  handle:   # jekyll
  pattern:  https://www.behance.net/%s
  icon:     icon brands fa-behance
youtube:
  label:    Youtube
  handle:   # jekyll
  pattern:  https://www.youtube.com/user/%s
  icon:     icon brands fa-youtube
vimeo:
  label:    Vimeo
  handle:   # jekyll
  pattern:  https://vimeo.com/%s
  icon:     icon brands fa-vimeo-v
angelist:
  label:    Angelist
  handle:   # jekyll
  pattern:  https://angel.co/u/%s
  icon:     icon brands fa-angelist
etsy:
  label:    Etsy
  handle:   # jekyll
  pattern:  https://www.etsy.com/shop/%s
  icon:     icon brands fa-etsy
goodreads:
  label:    Goodreads
  handle:   # jekyll
  pattern:  https://www.goodreads.com/%s
  icon:     icon brands fa-goodreads-g
tiktok:
  label:    Tiktok
  handle:   # jekyll
  pattern:  https://www.tiktok.com/@%s
  icon:     icon brands fa-tiktok
tumblr:
  label:    Tumblr
  handle:   # jekyll
  pattern:  https://%s.tumblr.com/
  icon:     icon brands fa-tumblr
reddit:
  label:    Reddit
  handle:   # jekyll
  pattern:  https://www.reddit.com/u/%s
  icon:     icon brands fa-reddit-alien
soundcloud:
  label:    Soundcloud
  handle:   # jekyll
  pattern:  https://soundcloud.com/%s
  icon:     icon brands fa-soundcloud
slack:
  label:    Slack
  handle:   # jekyll
  pattern:  https://%s.slack.com/
  icon:     icon brands fa-slack
```
Refreshing the page after saving this file should reveal a new set of social icons in the site header.

The introductory comments (text after `# `) provide configuration info for social icons. This list is used not only for the social icons in the site header, but also as templates for social links for people, posts, and pages elsewhere.

### Add the Elements page

To view the site styling elements on a single page, save the following content into `_pages/elements.html`:

```html
---
title:            Elements
categories:       [jekyll, editorial]
date:             2019-04-01 01:23:45 -0800
last_modified_at: 2019-12-23 23:23:23 -0800
permalink:        /elements
excerpt:          "Praesent ac adipiscing ullamcorper semper ut amet ac risus. Lorem sapien ut odio odio nunc. Ac adipiscing nibh porttitor erat risus justo adipiscing adipiscing amet placerat accumsan. Vis. Faucibus odio magna tempus adipiscing a non. In mi primis arcu ut non accumsan vivamus ac blandit adipiscing adipiscing arcu metus praesent turpis eu ac lacinia nunc ac commodo gravida adipiscing eget accumsan ac nunc adipiscing adipiscing lorem ipsum dolor sit amet nullam veroeros adipiscing."
---

<!-- Content -->
<h2 id="content">Sample Content</h2>
<p>Praesent ac adipiscing ullamcorper semper ut amet ac risus. Lorem sapien ut odio odio nunc. Ac adipiscing nibh porttitor erat risus justo adipiscing adipiscing amet placerat accumsan. Vis. Faucibus odio magna tempus adipiscing a non. In mi primis arcu ut non accumsan vivamus ac blandit adipiscing adipiscing arcu metus praesent turpis eu ac lacinia nunc ac commodo gravida adipiscing eget accumsan ac nunc adipiscing adipiscing lorem ipsum dolor sit amet nullam veroeros adipiscing.</p>
<div class="row">
  <div class="col-6 col-12-small">
    <h3>Sem turpis amet semper</h3>
    <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat commodo eu sed ante lacinia. Sapien a lorem in integer ornare praesent commodo adipiscing arcu in massa commodo lorem accumsan at odio massa ac ac. Semper adipiscing varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
  </div>
  <div class="col-6 col-12-small">
    <h3>Magna odio tempus commodo</h3>
    <p>In arcu accumsan arcu adipiscing accumsan orci ac. Felis id enim aliquet. Accumsan ac integer lobortis commodo ornare aliquet accumsan erat tempus amet porttitor. Ante commodo blandit adipiscing integer semper orci eget. Faucibus commodo adipiscing mi eu nullam accumsan morbi arcu ornare odio mi adipiscing nascetur lacus ac interdum morbi accumsan vis mi accumsan.</p>
  </div>
  <!-- Break -->
  <div class="col-4 col-12-medium">
    <h3>Interdum sapien gravida</h3>
    <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit.</p>
  </div>
  <div class="col-4 col-12-medium">
    <h3>Faucibus consequat lorem</h3>
    <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit.</p>
  </div>
  <div class="col-4 col-12-medium">
    <h3>Accumsan montes viverra</h3>
    <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit.</p>
  </div>
</div>

<hr class="major"/>

<!-- Elements -->
<h2 id="elements">Elements</h2>
<div class="row gtr-200">
  <div class="col-6 col-12-medium">

    <!-- Text stuff -->
      <h3>Text</h3>
      <p>This is <b>bold</b> and this is <strong>strong</strong>. This is <i>italic</i> and this is <em>emphasized</em>.
      This is <sup>superscript</sup> text and this is <sub>subscript</sub> text.
      This is <u>underlined</u> and this is code: <code>for (;;) { ... }</code>.
      Finally, this is a <a href="#">link</a>.</p>
      <hr/>
      <h2>Heading Level 2</h2>
      <h3>Heading Level 3</h3>
      <h4>Heading Level 4</h4>
      <hr/>
      <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>

    <!-- Lists -->
      <h3>Lists</h3>
      <div class="row">
        <div class="col-6 col-12-small">

          <h4>Unordered</h4>
          <ul>
            <li>Dolor etiam magna etiam.</li>
            <li>Sagittis lorem eleifend.</li>
            <li>Felis dolore viverra.</li>
          </ul>

          <h4>Alternate</h4>
          <ul class="alt">
            <li>Dolor etiam magna etiam.</li>
            <li>Sagittis lorem eleifend.</li>
            <li>Felis feugiat viverra.</li>
          </ul>

        </div>
        <div class="col-6 col-12-small">

          <h4>Ordered</h4>
          <ol>
            <li>Dolor etiam magna etiam.</li>
            <li>Etiam vel lorem sed viverra.</li>
            <li>Felis dolore viverra.</li>
            <li>Dolor etiam magna etiam.</li>
            <li>Etiam vel lorem sed viverra.</li>
            <li>Felis dolore viverra.</li>
          </ol>

          <h4>Icons</h4>
          <ul class="icons">
            <li><a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
            <li><a href="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
            <li><a href="#" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
            <li><a href="#" class="icon brands fa-github"><span class="label">Github</span></a></li>
            <li><a href="#" class="icon brands fa-dribbble"><span class="label">Dribbble</span></a></li>
            <li><a href="#" class="icon brands fa-tumblr"><span class="label">Tumblr</span></a></li>
          </ul>

        </div>
      </div>
      <h4>Definition</h4>
      <dl>
        <dt>Item1</dt>
        <dd>
          <p>Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Lorem ipsum dolor.</p>
        </dd>
        <dt>Item2</dt>
        <dd>
          <p>Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Lorem ipsum dolor.</p>
        </dd>
        <dt>Item3</dt>
        <dd>
          <p>Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Lorem ipsum dolor.</p>
        </dd>
      </dl>

      <h4>Actions</h4>
      <ul class="actions">
        <li><a href="#" class="button primary">Default</a></li>
        <li><a href="#" class="button">Default</a></li>
      </ul>
      <ul class="actions small">
        <li><a href="#" class="button primary small">Small</a></li>
        <li><a href="#" class="button small">Small</a></li>
      </ul>
      <div class="row">
        <div class="col-6 col-12-small">
          <ul class="actions stacked">
            <li><a href="#" class="button primary">Default</a></li>
            <li><a href="#" class="button">Default</a></li>
          </ul>
        </div>
        <div class="col-6 col-12-small">
          <ul class="actions stacked">
            <li><a href="#" class="button primary small">Small</a></li>
            <li><a href="#" class="button small">Small</a></li>
          </ul>
        </div>
        <div class="col-6 col-12-small">
          <ul class="actions stacked">
            <li><a href="#" class="button primary fit">Default</a></li>
            <li><a href="#" class="button fit">Default</a></li>
          </ul>
        </div>
        <div class="col-6 col-12-small">
          <ul class="actions stacked">
            <li><a href="#" class="button primary small fit">Small</a></li>
            <li><a href="#" class="button small fit">Small</a></li>
          </ul>
        </div>
      </div>

      <h4>Pagination</h4>
      <ul class="pagination">
        <li><span class="button disabled">Prev</span></li>
        <li><a href="#" class="page active">1</a></li>
        <li><a href="#" class="page">2</a></li>
        <li><a href="#" class="page">3</a></li>
        <li><span>&hellip;</span></li>
        <li><a href="#" class="page">8</a></li>
        <li><a href="#" class="page">9</a></li>
        <li><a href="#" class="page">10</a></li>
        <li><a href="#" class="button">Next</a></li>
      </ul>

    <!-- Blockquote -->
      <h3>Blockquote</h3>
      <blockquote>Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Lorem ipsum dolor. Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus.</blockquote>

    <!-- Table -->
      <h3>Table</h3>

      <h4>Default</h4>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Item1</td>
              <td>Ante turpis integer aliquet porttitor.</td>
              <td>29.99</td>
            </tr>
            <tr>
              <td>Item2</td>
              <td>Vis ac commodo adipiscing arcu aliquet.</td>
              <td>19.99</td>
            </tr>
            <tr>
              <td>Item3</td>
              <td> Morbi faucibus arcu accumsan lorem.</td>
              <td>29.99</td>
            </tr>
            <tr>
              <td>Item4</td>
              <td>Vitae integer tempus condimentum.</td>
              <td>19.99</td>
            </tr>
            <tr>
              <td>Item5</td>
              <td>Ante turpis integer aliquet porttitor.</td>
              <td>29.99</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="2"></td>
              <td>100.00</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <h4>Alternate</h4>
      <div class="table-wrapper">
        <table class="alt">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Item1</td>
              <td>Ante turpis integer aliquet porttitor.</td>
              <td>29.99</td>
            </tr>
            <tr>
              <td>Item2</td>
              <td>Vis ac commodo adipiscing arcu aliquet.</td>
              <td>19.99</td>
            </tr>
            <tr>
              <td>Item3</td>
              <td> Morbi faucibus arcu accumsan lorem.</td>
              <td>29.99</td>
            </tr>
            <tr>
              <td>Item4</td>
              <td>Vitae integer tempus condimentum.</td>
              <td>19.99</td>
            </tr>
            <tr>
              <td>Item5</td>
              <td>Ante turpis integer aliquet porttitor.</td>
              <td>29.99</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="2"></td>
              <td>100.00</td>
            </tr>
          </tfoot>
        </table>
      </div>

  </div>
  <div class="col-6 col-12-medium">

    <!-- Buttons -->
      <h3>Buttons</h3>
      <ul class="actions">
        <li><a href="#" class="button primary">Primary</a></li>
        <li><a href="#" class="button">Default</a></li>
      </ul>
      <ul class="actions">
        <li><a href="#" class="button large">Large</a></li>
        <li><a href="#" class="button">Default</a></li>
        <li><a href="#" class="button small">Small</a></li>
      </ul>
      <ul class="actions">
        <li><a href="#" class="button primary large">Large</a></li>
        <li><a href="#" class="button primary">Default</a></li>
        <li><a href="#" class="button primary small">Small</a></li>
      </ul>
      <ul class="actions fit">
        <li><a href="#" class="button primary fit">Fit</a></li>
        <li><a href="#" class="button fit">Fit</a></li>
      </ul>
      <ul class="actions fit small">
        <li><a href="#" class="button primary fit small">Fit + Small</a></li>
        <li><a href="#" class="button fit small">Fit + Small</a></li>
      </ul>
      <ul class="actions">
        <li><a href="#" class="button primary icon solid fa-search">Icon</a></li>
        <li><a href="#" class="button icon solid fa-download">Icon</a></li>
      </ul>
      <ul class="actions">
        <li><span class="button primary disabled">Primary</span></li>
        <li><span class="button disabled">Default</span></li>
      </ul>

    <!-- Form -->
      <h3>Form</h3>

      <form method="post" action="#">
        <div class="row gtr-uniform">
          <div class="col-6 col-12-xsmall">
            <input type="text" name="demo-name" id="demo-name" value="" placeholder="Name" />
          </div>
          <div class="col-6 col-12-xsmall">
            <input type="email" name="demo-email" id="demo-email" value="" placeholder="Email" />
          </div>
          <!-- Break -->
          <div class="col-12">
            <select name="demo-category" id="demo-category">
              <option value="">- Category -</option>
              <option value="1">Manufacturing</option>
              <option value="1">Shipping</option>
              <option value="1">Administration</option>
              <option value="1">Human Resources</option>
            </select>
          </div>
          <!-- Break -->
          <div class="col-4 col-12-small">
            <input type="radio" id="demo-priority-low" name="demo-priority" checked>
            <label for="demo-priority-low">Low</label>
          </div>
          <div class="col-4 col-12-small">
            <input type="radio" id="demo-priority-normal" name="demo-priority">
            <label for="demo-priority-normal">Normal</label>
          </div>
          <div class="col-4 col-12-small">
            <input type="radio" id="demo-priority-high" name="demo-priority">
            <label for="demo-priority-high">High</label>
          </div>
          <!-- Break -->
          <div class="col-6 col-12-small">
            <input type="checkbox" id="demo-copy" name="demo-copy">
            <label for="demo-copy">Email me a copy</label>
          </div>
          <div class="col-6 col-12-small">
            <input type="checkbox" id="demo-human" name="demo-human" checked>
            <label for="demo-human">I am a human</label>
          </div>
          <!-- Break -->
          <div class="col-12">
            <textarea name="demo-message" id="demo-message" placeholder="Enter your message" rows="6"></textarea>
          </div>
          <!-- Break -->
          <div class="col-12">
            <ul class="actions">
              <li><input type="submit" value="Send Message" class="primary"/></li>
              <li><input type="reset" value="Reset"/></li>
            </ul>
          </div>
        </div>
      </form>

    <!-- Image -->
      <h3>Image</h3>

      <h4>Fit</h4>
      <span class="image fit"><img src= "assets/images/pic11.jpg" alt=""/></span>
      <div class="box alt">
        <div class="row gtr-50 gtr-uniform">
          <div class="col-4"><span class="image fit"><img src= "assets/images/pic01.jpg" alt="" /></span></div>
          <div class="col-4"><span class="image fit"><img src= "assets/images/pic02.jpg" alt="" /></span></div>
          <div class="col-4"><span class="image fit"><img src= "assets/images/pic03.jpg" alt="" /></span></div>
          <!-- Break -->
          <div class="col-4"><span class="image fit"><img src= "assets/images/pic03.jpg" alt="" /></span></div>
          <div class="col-4"><span class="image fit"><img src= "assets/images/pic01.jpg" alt="" /></span></div>
          <div class="col-4"><span class="image fit"><img src= "assets/images/pic02.jpg" alt="" /></span></div>
          <!-- Break -->
          <div class="col-4"><span class="image fit"><img src= "assets/images/pic02.jpg" alt="" /></span></div>
          <div class="col-4"><span class="image fit"><img src= "assets/images/pic03.jpg" alt="" /></span></div>
          <div class="col-4"><span class="image fit"><img src= "assets/images/pic01.jpg" alt="" /></span></div>
        </div>
      </div>

      <h4>Left &amp; Right</h4>
      <p><span class="image left"><img src= "assets/images/pic01.jpg" alt=""/></span>Lorem ipsum dolor sit accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent.</p>
      <p><span class="image right"><img src= "assets/images/pic02.jpg" alt=""/></span>Lorem ipsum dolor sit accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent.</p>

    <!-- Box -->
      <h3>Box</h3>
      <div class="box">
        <p>Felis sagittis eget tempus primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Magna sed etiam ante ipsum primis in faucibus vestibulum.</p>
      </div>

    <!-- Preformatted Code -->
      <h3>Preformatted</h3>
      <pre><code>i = 0;

while (!deck.isInOrder()) {
  print 'Iteration ' + i;
  deck.shuffle();
  i++;
}

print 'It took ' + i + ' iterations to sort the deck.';
</code></pre>

  </div>
</div>
```
To view the elements file in your browser, click the "Elements" link in the sidebar menu (`http://localhost:4000/elements`).

### Add site defaults to make posts render properly

Because of a slight mismatch between HTML5 UP's CSS in the original Editorial HTML template and the default body classes assigned by Jekyll, we need to adjust some sitewide defaults to make posts render correctly. Although these preferences are set in the theme gem's `_config.yml` file, Jekyll doesn't use those defaults as "default defaults", so they must be replicated in your own site's configuration.

With that in mind, add the following `defaults` key to you Jekyll site's `_config.yml` file:

```yaml
###################
# Page Defaults
###################
defaults:
  - scope:
      path:         ""
    values:
      layout:       "default"
      type:         "pages"
      comments:     false
      published:    true
  - scope:
      path:         ""
      type:         "posts"
    values:
      layout:       "post"
      menus:        'posts'                   # used by jekyll-menus plugin
      type:         "posts"
      body_class:   "post"                    # overrides the class attribute on the html body tag
      image_path:   "/assets/images/"
      author_bio:   "<p>We're still working on a fabulous author bio and page. Check back later to learn more!</p>"
      comments:     false
      published:    true
```
The only key of interest right now is `body_class` under the second entry's `values` key. This is set to `post` and will override jekyll's default body class of `posts`, giving us `<body class="post">` instead of `<body class="posts">` in the html of our post pages.

Restart the Jekyll server and navigate your browser to the "Welcome to Jekyll!" post (should have a URL along the lines of `http://localhost:4000/jekyll/update/20yy/mm/dd/welcome-to-jekyll.html`) to see it properly styled.

Notice also that the sidebar menu now lists the "Welcome to Jekyll!" post automatically under the "Recent Posts" menu item.

#### Add the posts index page, and the pages collection

To view a listing of posts once we have more than one, let's add a posts index page viewable at the relative URL `/posts/` in the browser. We employ a permalink and Jekyll's collections feature to achieve this desired routing. Create the page `~/my-jekyll-site/_pages/posts.html` (creating the `_pages` folder along the way if necessary):

```html
---
title:            Posts
permalink:        /posts/     # trailing slash makes it an `index.html` file inside the `/posts/` directory, rather than a `posts.html` file in the root
---

<p>Hey, check out our many posts on diverse topics and interests. You can also check out the full list in our <a href="/archives">archives</a>.</p>
<hr class="major"/>
{% include pagination.html %}
<br/>
{% include posts.html %}
{% include pagination.html %}
```

We also need to tell Jekyll to output collection pages, so add the `collections` key to `_config.yml`:

```yaml
collections:
  pages:
    output:         true
```

This tells Jekyll to render the files in our `_pages` directory as pages in our site, following the directives provided in the front matter of each page.

We also need to set some defaults on the pages collection. Add the following entry under the `defaults` key in `_config.yml`:

```yaml
  - scope:
      path:         ""
      type:         "pages"
    values:
      layout:       "page"
      type:         "pages"
      image_path:   "/assets/images/"
      comments:     false
      published:    true
```

Without this latter change, the page title and posts listing won't show up on the posts page.

Restart Jekyll and navigate to the `/posts/` page. You should now be able to do this by clicking the "Recent Posts" link in the sidebar.

#### Turn off show authors (optional)
One quirk you might have noticed at this point is that the site title "Your awesome title" may be appearing as the author of the "Welcome to Jekyll!" post. This is because our site has no authors and so our theme defaults to the site title. However, we can turn off this feature, which is particularly useful for single-author sites, via a special `show` theme configuration key in `_config.yml`, like so:

```yaml
show:                                         # series of switches to customize what appears on the site
  authors:          false                     # single author blogs may want to disable showing the same author everywhere
```
Restarting the Jekyll server will then remove this default "author" from listings of posts throughout the site. When we add authors later, we can turn this feature back on.

### Add a Categories index page

Our initial post has two categories (jekyll & update), but they're not very useful right now. Let's create a simple categories index page that lists out our categories along with the posts that have those categories applied. Create the following `_pages/categories.html` page:

```html
---
title:            Categories
date:             2020-01-03 01:23:45 -0800
permalink:        /categories/
---

{%-assign sorted_categories = site.categories | sort %}
<!-- Categories -->
<p>These are the categories used on <a href="{{-site.url-}}">{{-site.title-}}</a> &nbsp;(number of &nbsp;<i class="far fa-sticky-note" style="font-size: 0.9em;"></i>&nbsp;posts).</p>
{% for category in sorted_categories-%}
  <h2 class="tight">
    <span title="Articles categorized as '{{-category | first-}}'">{{-category | first | capitalize-}}</span>
    <span class="smaller header-aside"> &nbsp;({{-category | last | size-}})</span>
  </h2>
  <ol>
  {%-for post in category.last %}
    {% include list_item.html-%}
  {%-endfor %}
  </ol>
{% endfor-%}
```

You should now be able to click on the "Categories" menu item and see our new Categories index page with two headings and our sole post listed under each.

### Add a Tags index page

Tags are another categorization tool for posts. Usually they're more fine-grained and free-wheeling than categories, which are generally limited in number to the main topics covered by your blog. Put the following code in the `_pages/tags.html` file to render both a list of posts by tags, and a tag cloud:

```html
---
title:            Tags
date:             2020-02-03 01:23:45 -0800
permalink:        /tags/
# NOTE: site.tags is a collection of documents for which tag.first is the tag itself
---

{%-assign sorted_tags         = site.tags           | sort-%}

<p>These are the tags used on <a href="{{-site.url-}}">{{-site.title-}}</a> &nbsp;(number of &nbsp;<i class="far fa-sticky-note" style="font-size: 0.9em;"></i>&nbsp;posts).</p>
<div class="row gtr-uniform">
  <div class="col-8 col-12-small">
    <h2>Site-wide Tags</h2>
    <ul>
      {%-for tag in sorted_tags %}
      <li>
        <strong id="{{-tag | first-}}" title="Articles tagged '{{-tag | first-}}'">{{-tag | first-}}</strong>
        &nbsp; ({{-tag | last | size }})
        <ul class="compact">
          {% for post in tag.last-%}
            {% include list_item.html li_class="post" title_template="Check out the ':item_title' post"-%}
          {%-endfor %}
        </ul>
      </li>
      {%-endfor %}
    </ul>
  </div>

  <aside class="column col-4 col-12-small">
    <h2>Tag Cloud</h2>
    <ul class="inline tags">
    {%-for tag in site.tags %}
      <li>
        <span title="Articles tagged '{{-tag | first-}}'" class="pill button" style="font-size: {{ tag | last | size | times:10 | plus:75-}}%; margin: 0.1rem;">{{-tag | first }} ({{-tag | last | size-}})</span>
      </li>
    {%-endfor %}
    </ul>
  </aside>
</div>
```
Now click on the "Tags" link in the sidebar menu (`http://localhost:4000/tags`) to see the page. Since we are using no tags yet, it's blank. Let's add the following line to the front matter of our blog post:

```yaml
tags: [jekyll, meta, technology, code, site, editorial theme]
```

and reload our tags index page to see a list of tags, as well as a populated tag cloud. These tags will also show up in various other places on the site.

### Add an Archives index page

The Archives index page is similar to the Category or Tag index page, but organized by date instead of category or tag. The code for this page is a little more complicated to let you choose whether to group by year or by month. The version you can copy from the theme gem (`/_pages/archives.html`) also includes grouping by day, for even more prolific blogs.

```html
---
title:            Post Archive
date:             2020-01-04 01:23:45 -0800
permalink:        /archives/
excerpt:          ""      # NOTE: this empty excerpt fixes liquid "'if' tag was never closed included" error: https://jekyllrb.com/docs/troubleshooting/#excerpts
---

{%-assign archived = site.jekyll-archives.enabled-%}
{%-if archived contains 'year'-%}{%-unless archived contains 'month'-%}{%-unless archived contains 'day'-%}{%-assign is_year_archive = true-%}{%-endunless-%}{%-endunless-%}{%-endif-%}
{%-if site.posts-%}
  {%-assign archives_root = site.archives_root  | default: ''-%}
  {%-assign posts_by_year = site.posts          | group_by_exp: 'post',   "post.date    | date: '%Y'"-%}

  <!-- Archives -->
  <p>This is the archive of posts for <a href="{{-site.url-}}">{{-site.title-}}</a> &nbsp;(number of &nbsp;<i class="far fa-sticky-note" style="font-size: 0.9em;"></i>&nbsp;posts).</p>
  {%-if archived contains 'year' or archived contains 'month' or archived contains 'day'-%}
    {%-for year in posts_by_year %}
      {%-assign year_url = site.jekyll-archives.permalinks.year | replace: ':year', year.name-%}
      <h2{%-if is_year_archive %} class="tight"{%-endif-%}>
        <span title="Articles from year '{{-year.name-}}'">{{-year.name-}}</span>
        <span class="smaller header-aside"> &nbsp;({{-year.items | size }})</span>
      </h2>
      {%-if archived contains 'month' or archived contains 'day'-%}
        {%-assign posts_by_month    = year.items          | sort: 'date'  | group_by_exp: "post",    "post.date    | date: '%B'"-%}
          {%-for month in posts_by_month %}
            {%-assign month_name = month.name | date: '%m'-%}
            {%-assign month_url = site.jekyll-archives.permalinks.month | replace: ':year', year.name | replace: ':month', month_name-%}
            <h3 class="tight">
              <span title="Articles from {{-month.name }} {{ year.name }}">{{-month.name }} {{ year.name-}}</span>
              <span class="smaller header-aside"> &nbsp;({{-month.items | size }})</span>
            </h3>
            <ol>
            {%-for post in month.items %}
              {% include list_item.html-%}
            {%-endfor %}
            </ol>
        {%-endfor %}
      {%-else %}
        <ol>
        {%-for post in year.items %}
          {% include list_item.html-%}
        {%-endfor %}
        </ol>
      {%-endif %}
    {%-endfor %}
  {%-endif %}
{%-endif %}
```

The granularity of the archives grouping is set via the `jekyll-archives.enabled` array, even if you don't have `jekyll-archives` installed. To have year-based groupings, make sure `year` is in the `enabled` array. Similarly, have `month` there, for month groupings. If you've copied the extended `archives.html` file from the gem's or its Github repository's `_pages` directory, you can also get day granularity with `day` in the `enabled` array. Here is the full jekyll-archives configuration in the gem's `_config.yml` for reference:

```yaml
###################
# Jekyll Archives - https://github.com/jekyll/jekyll-archives
###################
archives_root:      '/'       # set this to the path prefix for all date-based archives pages, e.g., '/archives'
jekyll-archives:
  enabled:          [month, year, categories, tags]
  layouts:
    year:           archive
    month:          archive
    day:            archive
    category:       category
    tag:            tag
  permalinks:
    year:           '/:year/'
    month:          '/:year/:month/'
    day:            '/:year/:month/:day/'
    tag:            '/tags/:name/'
    category:       '/categories/:name/'
```

### Add People

TODO

### Add Projects

TODO

## Setup Notes

As standard with Jekyll sites, put your layouts in `_layouts`, your includes in `_includes`, your sass files in `_sass` and any other assets in `assets`. These are the only directories from which theme files will be inherited in your site. You can override any theme files by having an identically named file in your site's equivalent directory.


### Extra Folders

The Editorial theme has the following extra directories on top of the standard set in Jekyll:

1. **_data** - date-based archive
    * menus.yml - holds the main menu structure of the sidebar menu
    * social.yml - lists social media sites to use for icon links
    * features.yml - the home page features list
    * categories.yml - manual categories list for generating ...
    * tags.yml - manual tags list for generating ...
    * taxonomy.yml - a sample set of categories and tags for reference
    * scripts.yml - an optional separate file to list out scripts (possibly useful for sites with many evoloving script files); overrides the `scripts` key in the theme or site `_config.yml` file, if present
2. **_data/comments** - if you support staticman comments, they will be saved in this folder
3. **/_pages** - a collection of pages that don't fit in any other collections
4. **/_projects** - a custom Jekyll collection for project pages that are not date-based posts concerning (usually longer running) projects or interests
5. **/_people** - a custom Jekyll collection of people affiliated with the site (usually authors)
6. **/_samples** - a set of files showing the full breath of options for the front matters of various colection pages

### Extra Files
TODO

## Usage

TODO: Write usage instructions here. Describe your available layouts, includes, sass and/or assets.

### Site Configuration
TODO `_config.yml`


#### Contact Info
TODO


### Fonts
Adhering to principle #1, fonts this theme was designed with are included in the `assets/webfonts` directory. That way, we don't need visitors to talk to Google servers to use the Google fonts (Open Sans, Roboto Slab) employed by the theme.


### Favicons (optional)
Replace the theme's sample favicons by [creating your own favicons](https://coderwall.com/p/89p9kw/create-all-favicon-formats-in-mac-os-with-preview) and putting them in the root directory of your site.


#### Social Media Links
To use social icon links in your site, copy the `_data/social.yml` file into your site's `_data` folder. This data file includes a number of social sites already configured for use with the Editorial theme.

##### `_data/social.yml` and the `handle` key
You just need to edit/fill in your `handle` for each social site you want to appear on your site. Leave the `handle` value blank (not even an empty string) if you don't wish to use a particular social link in the header. For instance, in the following example, replace `middlebear` with your github handle, if you want a site header icon link to your github page.

```yaml
github:
  label:    Github
  handle:   middlebear
  pattern:  https://github.com/%s
  icon:     icon brands fa-github
```

{:.box}
NOTE: Don't delete entries you're not using right away. Instead, leave them in place (with blank `handle` values) for use in other places on your site. 

If you want to link to your Github Pages site instead, you could, for instance, also replace the `pattern` with `https://%s.github.io`. Notice that `%s` is the location in the `pattern` where the `handle` will be substituted.


##### Font Awesome Icons
The `icon` entry is the Font Awesome icon to be used, expressed as CSS class(es). It's likely Font Awesome already has an existing brand icon for the social media site, in which case, keep the `brands` value in this class list. You should always keep the `icon` class in the `icon` entry, so the resultant icon is rendered consistently.

You can also add new entries, like for a fictitious WhatsIt App:

```yaml
whatsitapp:
  label:    WhatsIt App
  handle:   wombat-tiddlewinker
  pattern:  https://whatsitapp.com/%s/profile
  icon:     icon brands fa-whatsitapp
```

##### Social Icons for People (and Posts, Projects, and Pages)

The Editorial theme leverages this `social.yml` list to allow you to add social links for people and pages as well. In the front matter of the page, add a `social` entry like so:

```yaml
---
social:
  twitter:        julia-caesar
  facebook:       caesardejulia
  linkedin:       juliamcaesar
  instagram:      julia_thecatfacedassassin
  medium:         juliacaesar
---
```

Notice that the key (like `facebook`) needs to match a key in the `_data/social.yml` file. This is how the `pattern` and `icon` values are looked up for a given social site. The value of the social entry is the person's (or page's) particular handle (e.g., `caesardejulia`) for that social site.


### Layouts

* `⁨_layouts⁩\default.html` - basic skeleton of the site, and the default layout used when not specified in front matter (or via `_config.yml` front matter defaults).
* `_layouts\home.html`    - a special layout for just the home page of the site. Could be used for other landing pages as well.
* `⁨_layouts⁩\page.html`    - the generic page layout, with a title header and optional page elements like subtitle, date, authors, and page image. Used for index pages and other general site pages that aren't blog posts or author bio pages.
* `⁨_layouts⁩\post.html`    - the main blog post layout. It's a version of the page layout along with categories, tags, next/previous navigation, and a fuller author bio block.
* `⁨_layouts⁩\author.html`  - the page layout for author bios. It has additional elements like position, company, and twitter handle.

#### Microformats & Microdata
The `default.html` layout and the theme headers, footer, and sidebar incorporate, as much as possible, and probably incorrectly in some places, the basics of microformats (e.g., `h-card`) and microdata (e.g., `itemscope`) into the theme. Both of these formats attempt to label data so it's easier for machines to understand items of information in a page. However, they have different purposes.

Microformats help sites interact with each other in a sort of decentralized social network&mdash;this is useful for commenting, quoting and liking content on other sites or vice versa. Microdata helps centralized platforms like Twitter, Facebook and Google better present your data on those platforms--this is useful if you cross-post content to those platforms or want better search rankings for you content.

### Categories & Tags
Jekyll's `categories` and `tags` provide a flexible set of tools to organize posts. This theme is designed to be compatible with the [`jekyll-archives`](https://github.com/jekyll/jekyll-archives/) plugin, configured for automatic [category](/category/) & [tag](/tag/) list (aka index) pages. You can find the templates for these list pages in `/_pages/categories.html` and `/_pages/tags.html` of the theme gem or the theme's Github repository.

When `jekyll-archives` is installed, each category and tag also automatically generates a list page. These pages list posts categorized or tagged commensurately with the given category or tag. The templates for these pages are located in the `_layouts` directory: `/_layouts/category.html` and `/_layouts/tag.html` respectively. These pages will be generated under the `/category/[category_name]` and `/tag/[tag_name]` paths, one for each category and tag in their respective paths.

You can override any of the default configurations for `jekyll-archives` in `_config.yml`, and override any of the list page templates by copying them into your corresponding directories, either `/_pages/` or `/_layouts/` depending on what you want to customize.


### Includes
TODO

### Sass Styling
TODO

### Assets
TODO

### Banner
One neat little trick buried in the CSS is the selective removal of `<br>` line breaks from the `h1` header of the `#banner` secion of a page. That's most prominently used on the sample home page, where there is a line break between "Editorial" and "by", which forces a particular spacing on large screens, where the header is beside the image, but gets removed on small (vertically-oriented) screens, where the header is below the image.

### Navigation
The site navigation menu will auto-generate based on the contents of the `menus.yml` data file and the pages, posts, and projects you add to the site. By default, the menu will list the last 10 items for each type. It will also have links to each category page, a link to the tag index page, about, privacy, and terms.

### Search box
Search needs a [search provider](https://jekyllrb.com/resources/#search) like [Algolia](https://www.algolia.com/) to work. If you don't need search capabilities, remove the search box by copying `sidebar.html` from this gem to `_includes/sidebar.html` (if you haven't already) for your site. Then remove the include for search `{% include search.html %}` from that file and save.

### Newsletter signup form
The newsletter signup form needs a [form handler](https://jekyllrb.com/resources/#forms) and a newsletter service to work. Remove the newsletter signup form by copying `sidebar.html` from the jekyll-theme-editorial gem to `_includes/sidebar.html` (if you haven't already) for your site. Then remove the include for the newsletter `{% include newsletter_signup.html %}` from that file and save.

### Sign In form
The sign in form probably needs a static identity/authentication/authorization provider like [Userbase](https://userbase.com/) and a email service to make work. Delete the page and remove the sign in entry from the navigation menu if you don't need this functionality.

### Terms & Privacy Policy
Many websites have [Terms of Use](/terms.hmtl) (source file: `/terms.md`) and [Privacy Policy](/privacy.html) (source file: `/privacy.md`) pages spelling out the rights and obligation of website visitors. Many sites don't need formal policies, but if you do, you can edit these pages with your terms and policies. Be sure to research and develop your own language for these. The sample language is only meant as a visual placeholder.

If you don't need these elements, delete the two markdown files and remove the links in the site footer (source file: `/_includes/footer.html`).


## Future Improvements
This is a random and very incomplete list of potential future improvements that may be made to the theme (no guarantees though!). Feel free to take some or all of these ideas and run with them. Pull requests welcome!

* [ ] support for Webmentions and `authn` tagging for IndieAuth
* [ ] Integrate/test pagination with jekyll-pagination-v2 gem
* [ ] Integrate a more robust, privacy-oriented spam solution/service for comments (not Google)
* [ ] Merge project and page tags and categories, to prevent duplicates
* [ ] Create category pages for project- and page-specific tags (a la jekyll-archives)
* [ ] Allow 2 levels of filtering, category and then tag(s)
* [ ] Add categorized projects and pages fully to category archive pages without using a plugin
    * Must solve date ranges for year, month, day for varying values of these (like leap year)
* [ ] Implement an asset pipeline to enable easier caching and integration with a CDN, if desired
    * Also removes the need to prefix image paths
    * Adds automatic cache-busting on updates
* [ ] Implement a photo gallery
* [ ] Auto-suggest tags based on content, in developer mode (some added text in an message overlay, for instance)


## Contributing
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md) 

Bug reports and pull requests are welcome on [GitHub](https://github.com/middlebear/jekyll-theme-editorial). This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.


## License

The Editorial Jekyll theme is available as open source under the terms of the [CC BY 3.0 License](https://creativecommons.org/licenses/by/3.0/).

### [HTML5 UP](https://html5up.net) Credits
* HTML template: [AJ](mailto:"AJ" <aj@lkn.io>) | [🐦](https://twitter.com/ajlkn)<br>  Free for personal and commercial use under the [CCA 3.0 license](https://html5up.net/license).
* Demo Images: [Unsplash](unsplash.com)
* Icons: [Font Awesome](fontawesome.io)
* Other: [jQuery](jquery.com), [Responsive Tools](https://github.com/ajlkn/responsive-tools)
