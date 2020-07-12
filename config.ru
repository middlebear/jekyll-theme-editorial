# run jekyll via rack to test with puma instead of webrick & deploy to heroku
# for heroku, see https://jamesward.com/2014/09/24/jekyll-on-heroku/
# 
# some config options (from https://github.com/adaoraul/rack-jekyll):
# :config        - use given config file (default: "_config.yml")
# :force_build   - whether to always generate the site at startup, even
#                  when the destination path is not empty (default: false)
# :auto          - whether to watch for changes and rebuild (default: false)
# :wait_page     - a page to display while pages are rendering

require "rack/jekyll"

run Rack::Jekyll.new(force_build: true, auto: true)