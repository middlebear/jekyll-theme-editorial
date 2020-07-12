---
# defaults assumed for these jekyll variables: layout, permalink, excerpt
# name the file the same as the handle (e.g., `julia.md`)
handle:           ""                          # the short, unique 'slug' name of a person
name:             ""                          # the written name of the person on site pages
blurb:            ""                          # like a subtitle, but for a person
title:            ""                          # optional; used for the HTML page title tag, menus & SEO
series:           "The Partytime Collective"  # optional; use `series` group people and show a sidebar of people in the group (limited to 1 for now)
location:         "Los Angeles, CA"           # optional; location of the person
website:          https://example.com/        # optional; personal website
position:         ""                          # optional; job title
company:          ""                          # optional; name of affiliated company
company_url:      https://example.com/        # optional; affiliated company website
social:                                       # see `_data/social.yml` for options and to add your own
  twitter:        ""                          # optional; twitter handle (without the @ sign)
  facebook:       ""                          # optional; facebook username
  linkedin:       ""                          # optional; linkedin username
  instagram:      ""                          # optional; instagram handle
  medium:         ""                          # optional; medium handle (without the @ sign)
image:            ""                          # default image for SEO & jekyll-feed
images:                                       # all images are optional; placeholder images will be used in some places if not specified
  default:                                    # general-use size, default for other uses if they're not specified
    file:         ""                          # no path, just the filename (e.g., "my great image.png")
                                              # default images generally use the default image texts, but can be specified here
  banner:                                     # largest, full-page width landscape at top of page
    file:         ""                          # no path, just the filename (e.g., "my great image.png")
    alt_text:     ""                          # describe the image for screen readers
    caption:      ""                          # optional explanatory text, can be used for attributions
    title:        ""                          # optional; usually shown as a tooltip on hover
  thumbnail:                                  # optional; between small & normal, for lists/grids (like index pages)
    file:         ""                          # no path, just the filename (e.g., "my great image.png")
                                              # thumbnails generally use the default image texts, but can be specified here
  avatar:                                     # smallest, avatars represent the person & isn't necessarily a photo; for attribution, like comments
    file:         ""                          # no path, just the filename (e.g., "my great image.png")
                                              # avatars generally use the default image texts, but can be specified here
# these texts are defaults for all images in the images array, if not individually specified:
  alt_text:       ""                          # describe the image for screen readers
  caption:        ""                          # optional explanatory text, can be used for attributions
  title:          ""                          # optional; usually shown as a tooltip on hover
  gallery:        []                          # FUTURE: array of gallery images, similar in format to above images array but no text defaults
date:                                         # optional; publication date; overrides the file save date
last_modified_at:                             # optional; date to show in addition to/in place of create date
published:        false                       # authors may choose not to publish their bio page
roles:            [author]                    # FUTURE: array of roles beyond the 'reader' default
permissions:      []                          # FUTURE: array of permissions beyond those assigned by roles
canonical_url:    ""                          # optional; customize the canonical URL for this page
lang:             ""                          # optional; language for the page, `en_US` by default
description:      ""                          # optional; short description of the page's content used for SEO
comment:          ""                          # FUTURE: here we can put comments that won't be output on any public pages, like candidate tags/categories, that might show up on private pages in the future
# NOTE that the first paaragraph below is the excerpt, if no excerpt is defined here in the front matter.
---
