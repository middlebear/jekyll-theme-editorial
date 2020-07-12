---
# defaults assumed for these jekyll variables: layout, permalink, published, excerpt
# name the file similar to title (slugified - replace spaces with underscores & remove punctuation)
title:            ""                          # used in the page/post header, HTML title, menus & SEO
subtitle:         ""                          # optional; shown under the page/post header
author:           []                          # use the handle of the author, not their name
editor:           []                          # FUTURE: add and display editors
date:             2020-01-01 00:00:00 -0800   # publication date; overrides the file save date
last_modified_at:                             # optional; date to show in addition to/in place of create date
categories:       []                          # choose one best category, ideally
tags:             []                          # choose 3-7 tags, ideally
series:           "Build a blog"              # optional; use `series` to group posts and show a sidebar of posts in the series (limited to 1 for now)
location:         "New York, NY"              # optional; location where the post was made
website:          https://example.com/        # optional; external, related website, possibly featured
image:            ""                          # default image for SEO & jekyll-feed
images:                                       # all images are optional; banner and either default or thumbnail are recommended
  default:                                    # general-use size, default for lists if no thumbnail
    file:         ""                          # no path, just the filename (e.g., "my great image.png")
                                              # default images generally use the default image texts, but can be specified here
  banner:                                     # largest, full-page width landscape at top of page
    file:         ""                          # no path, just the filename (e.g., "my great image.png")
    alt_text:     ""                          # describe the image for screen readers
    caption:      ""                          # optional explanatory text, can be used for attributions
    title:        ""                          # optional; usually shown as a tooltip on hover
  thumbnail:                                  # smaller image for lists/grids (like index pages)
    file:         ""                          # no path, just the filename (e.g., "my great image.png")
                                              # thumbnails generally use the default image texts, but can be specified here
# these texts are defaults for all images in the images array, if not individually specified:
  alt_text:       ""                          # describe the image for screen readers
  caption:        ""                          # optional explanatory text, can be used for attributions
  title:          ""                          # optional; usually shown as a tooltip on hover
  gallery:        []                          # FUTURE: array of gallery images, similar in format to above images array but no text defaults
canonical_url:    ""                          # optional; customize the canonical URL for this page
lang:             ""                          # optional; language for the page, `en_US` by default
description:      ""                          # optional; short description of the page's content used for SEO
comment:          ""                          # FUTURE: here we can put comments that won't be output on any public pages, like candidate tags/categories, that might show up on private pages in the future
# NOTE that the first paaragraph below is the excerpt, if no excerpt is defined here in the front matter.
---
