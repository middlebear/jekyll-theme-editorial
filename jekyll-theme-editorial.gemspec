# frozen_string_literal: true

Gem::Specification.new do |s|
  s.name          = "jekyll-theme-editorial"
  s.version       = "1.0.4"
  s.authors       = ["Middle Bear"]
  s.email         = ["admin@middlebear.org"]
  s.summary       = "Editorial, a Jekyll theme based on the Editorial template by HTML5 UP, Jekyllized by Middlebear."
  s.description   = "Editorial is a blog/magazine-ish template."
  s.homepage      = "https://jekyll-theme-editorial.github.io/"
  s.license       = "CC-BY-3.0"

  s.metadata["plugin_type"] = "theme"

  s.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_data|_includes|_layouts|_pages|_people|_posts|_projects|_samples|_sass|_config\.yml|404.html|[\w-]+.md|favicon|robots.txt|staticman.yml|LICENSE|README)!i) }

  # NOTE: github pages is currently locked to jekyll v3.8.7
  s.add_runtime_dependency "jekyll", ">= 3.8.7", "<5.0"
  # TODO: remove these 2 gems as runtime dependencies
  s.add_runtime_dependency "jekyll-feed", "~> 0.13"
  s.add_runtime_dependency "jekyll-seo-tag", "~> 2.6"

  # TODO: consider adding jekyll-data plugin to pull in theme _data into sites
  # s.add_runtime_dependency "jekyll-data", "~> 1.1"
  # use the github pages gen when deploying to github pages, rather than 
  #     including individual gems separately
  # s.add_runtime_dependency "github-pages", "~> 206"

  # github pages supported gems
  # s.add_runtime_dependency "jekyll-sitemap", "~> 1.4"
  # s.add_runtime_dependency "jekyll-paginate", "~> 1.1"
  # s.add_runtime_dependency "jekyll-mentions", "~> 1.6"
  # s.add_runtime_dependency "jemoji", "~> 0.12"
  # s.add_runtime_dependency "jekyll-remote-theme", "~> 0.4"

  # jekyll-archives, jekyll-hashtags, jekyll-menus, classifier-reborn, gsl, 
  #     jekyll-webmention_io are unsupported by github pages
  # s.add_runtime_dependency "jekyll-archives", "~> 2.2"
  # s.add_runtime_dependency "jekyll-hashtags", "~> 0.1"
  # s.add_runtime_dependency "jekyll-menus", "~> 0.6"
  # s.add_runtime_dependency "classifier-reborn", "~>2.2"
  # gsl makes classification faster for related_posts when building the site
  # s.add_runtime_dependency "gsl", "~>2.1"
  # s.add_runtime_dependency "jekyll-webmention_io", "~> 3.3"

  s.add_development_dependency "bundler", "~> 2.1"
  s.add_development_dependency "rake", "~> 13.0"
  # uncomment puma & rack-jekyll to use puma instead of webrick in development
  # s.add_development_dependency "puma", "~> 4.3"
  # s.add_development_dependency "rack-jekyll", "~> 0.5"
end