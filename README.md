# Editorial, a Jekyll theme

Editorial is a Jekyllized version of the [Editorial template](https://html5up.net/editorial) by [HTML5 UP](https://html5up.net/) and converted into a Jekyll theme by [Middle Bear](https://middlebear.org/). The design hints toward a newpaper-like blog with big page banners and slab serif headlines. It features a prominent collapsible memu sidebar that houses navigation, contact information, the footer, and other components, while also accentuating the main content front and center.

## Quick Start

Add this line to your Jekyll site's `Gemfile`, ideally under the `:jekyll_plugins` group, which makes adding it to `_config.yml` (as shown next) optional, though still recommended:

```ruby
gem "jekyll-theme-editorial"
```
And add this line to your Jekyll site's `_config.yml` if you didn't add it to the `:jekyll_plugins` group in the `Gemfile`:

```yaml
theme: jekyll-theme-editorial
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install jekyll-theme-editorial

Then run `bundle exec jekyll serve` (or the shorter `jekyll s` if your setup allows) to see the site with the default sample content.

**__LOTS AND LOTS OF TODOS for this documentation!!__**


## Setup Notes

As standard with Jekyll sites, put your layouts in `_layouts`, your includes in `_includes`, your sass files in `_sass` and any other assets in `assets`.

### Default Listings (Extra Folders)

The Editorial theme has the following extra directories on top of the standard set in Jekyll, each containing a single `index.html` file:

1. **/archives** - date-based archive
2. **/categories** - category-based archive
3. **/tags** - tag-based archive
4. **/posts** - the default listing of blog posts
5. **/projects** - a default listing of the projects collection
6. **/people** - an optional listing of the people involved in your site


## Introduction

Some principles:

  1. No external dependencies by default
    * Google
    * Disqus
    * Third-party form handlers
  2. Componentized as much as possible
    * Lots of includes
  3. Works on Github Pages by default
    * For other hosting platforms, extended functionality from plugins not integrated into Github Pages also work out-of-the-box, for a handful of plugins 


## Future Improvements

* [ ] Get pagination working via jekyll-pagination-v2 gem
* [ ] Integrate a more robust, privacy-oriented spam solution/service for comments (not Google)
* [ ] Merge project and page tags and categories, to prevent duplicates
* [ ] Create category pages for project- and page-specific tags (a la jekyll-archives)
* [ ] Allow 2 levels of filtering, category and then tag(s)
* [ ] Add categorized projects and pages to category archive pages
    * Must solve date ranges for year, month, day for varying values of these (like leap year)
* [ ] Make cards work in a generic way so any data structure can be passed to it
    * [ ] _includes/card.html
    * [ ] _includes/cards.html
* [ ] Implement an asset pipeline so 
    * We don't need to prefix image paths
    * Automatic cache-busting
    * Easier to integrate a CDN, if desired
* [ ] Auto-hashtagging and linking of tags to tag pages (without manually adding an octothorpe `#` to signify a tag)
* [ ] Implement a photo gallery
* [ ] Auto-suggest tags based on content, in developer mode (some added text in an message overlay, for instance)
* [ ] Render arbitrary collections in mini-posts.html, rather than just projects, that have the same interface of 

    * `title`
    * `url`
    * `image_path`
    * `image`
    * `image_alt_text`
    * `summary`
    * `published` (boolean)

### Favicons (optional)
Replace the theme's sample favicons by [creating your own favicons](https://coderwall.com/p/89p9kw/create-all-favicon-formats-in-mac-os-with-preview) and putting them in the root directory of your site.


## Components
These are the major components of the theme.

### Fonts
Adhering to principle #1, fonts this theme was designed with are included in the `assets/webfonts` directory. That way, we don't need visitors to talk to Google servers to use the Google fonts (Open Sans, Roboto Slab) employed by the theme.


## Usage

TODO: Write usage instructions here. Describe your available layouts, includes, sass and/or assets.

### Site Configuration

`_config.yml`


#### Contact Info



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
The `default.html` layout and the theme headers, footer, and sidebar incorporate, as much as possible, and probably incorrectly in some places, the basics of microformats (e.g., `h-card`) and microdata (e.g., `itemscope`) into the theme. Both of these formats attempt to label data so it's easier for machines to understand items of information in a page. However, they're have different purposes.

Microformats help sites  interact with each other in a sort of decentralized social network&mdash;this is useful for commenting, quoting and liking content on other sites or vice versa. Microdata helps centralized platforms like Twitter, Facebook and Google better present your data on those platforms--this is useful if you cross-post content to those platforms or want better search rankings for you content.

TODO: document Webmentions, and `authn` tagging for IndieAuth


### Categories & Tags
Jekyll's `categories` and `tags` provide a flexible set of tools to organize posts. This theme by default includes the [`jekyll-archives`](https://github.com/jekyll/jekyll-archives/) plugin, configured for automatic [category](/category/) & [tag](/tag/) list (aka index) pages. You can find the templates for these list pages in `/_pages/categories.html` and `/_pages/tags.html`.

Each category and tag also automatically generates a list page. These pages list posts categorized or tagged commensurately with the given category or tag. The templates for these pages are located in the `_layouts` directory: `/_layouts/category.html` and `/_layouts/tag.html` respectively. These pages will be generated under the `/category/[category_name]` and `/tag/[tag_name]` paths, one for each category and tag in their respective paths.

You can override any of the default configurations for `jekyll-archives` in `_config.yml`, and override any of the list page templates by copying them into your corresponding directories, either `/_pages/` or `/_layouts/` depending on what you want to customize.


### Includes


### Sass Styling


### Assets


### Banner
One neat little trick buried in the CSS is the selective removal of `<br>` line breaks from the `h1` header of the `#banner` secion of a page. That's most prominently used on the sample home page, where there is a line break between "Editorial" and "by", which forces a particular spacing on large screens, where the header is beside the image, but gets removed on small (vertically-oriented) screens, where the header is below the image.


### Navigation
The site navigation menu will auto-generate based on the contents of the `navigation.yml` data file and the pages, posts, and projects you add to the site. By default, the menu will list the last 10 items for each type. It will also have links to each category page, a link to the tag index page, about, privacy, and terms.


### Search box
Search needs a [search provider](https://jekyllrb.com/resources/#search) like [Algolia](https://www.algolia.com/) to work. If you don't need search capabilities, remove the search box by copying `sidebar.html` from this gem to `_includes/sidebar.html` (if you haven't already) for your site. Then remove the include for search `{% include search.html %}` from that file and save.

### Newsletter signup form
The newsletter signup form needs a [form handler](https://jekyllrb.com/resources/#forms) and a newsletter service to work. Remove the newsletter signup form by copying `sidebar.html` from the jekyll-theme-editorial gem to `_includes/sidebar.html` (if you haven't already) for your site. Then remove the include for the newsletter `{% include newsletter_signup.html %}` from that file and save.

### Sign In form
The sign in form probably needs a static identity/authentication/authorization provider like [Userbase](https://userbase.com/) and a email service to make work. Delete the page and remove the sign in entry from the navigation menu.

### Terms & Privacy Policy
Many websites have [Terms of Use](/terms.hmtl) (source file: `/terms.md`) and [Privacy Policy](/privacy.html) (source file: `/privacy.md`) pages spelling out the rights and obligation of website visitors. Many sites don't need formal policies, but if you do, you can edit these pages with your terms and policies. Be sure to research and develop your own language for these. The sample language is only meant as a visual placeholder.

If you don't need these elements, delete the two markdown files and remove the links in the site footer (source file: `/_includes/footer.html`).


## Contributing
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md) 

Bug reports and pull requests are welcome on [GitHub](https://github.com/middlebear/jekyll-theme-editorial). This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## Development

To set up your environment to develop this theme, run `bundle install`.

Your theme is setup just like a normal Jekyll site! To test your theme, run `bundle exec jekyll serve` and open your browser at `http://localhost:4000`. This starts a Jekyll server using your theme. Add pages, documents, data, etc. like normal to test your theme's contents. As you make modifications to your theme and to your content, your site will regenerate and you should see the changes in the browser after a refresh, just like normal.

When your theme is released, only the files in `_layouts`, `_includes`, `_sass` and `assets` tracked with Git will be bundled.
To add a custom directory to your theme-gem, please edit the regexp in `jekyll-theme-editorial.gemspec` accordingly.

## License

The Editorial Jekyll theme is available as open source under the terms of the [CC BY 3.0 License](https://creativecommons.org/licenses/by/3.0/).

### [HTML5 UP](https://html5up.net) Credits
* HTML template: [AJ](mailto:"AJ" <aj@lkn.io>) | [🐦](https://twitter.com/ajlkn)<br>  Free for personal and commercial use under the [CCA 3.0 license](https://html5up.net/license).
* Demo Images: [Unsplash](unsplash.com)
* Icons: [Font Awesome](fontawesome.io)
* Other: [jQuery](jquery.com), [Responsive Tools](https://github.com/ajlkn/responsive-tools)

