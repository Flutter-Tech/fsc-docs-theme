source "https://rubygems.org"
ruby RUBY_VERSION

# Run Jekyll with `bundle exec`, like so:
#
#     bundle exec jekyll serve
#
# This will help ensure the proper Jekyll version is running.
gem "jekyll", ">= 3.6.3"

# If you want to use GitHub Pages, remove the "gem "jekyll"" above and
# uncomment the line below. To upgrade, run `bundle update github-pages`.
# gem "github-pages", group: :jekyll_plugins

# If you have any plugins, put them here!
group :jekyll_plugins do
   gem "jekyll-feed", "~> 0.6"
   gem 'jekyll-paginate', '~> 1.1'
   gem 'jekyll-seo-tag'
   gem 'jekyll-gist'
   gem 'jekyll-livereload'
   gem 'jekyll-avatar'
   gem 'jekyll-octicons', '~> 9.1', '>= 9.1.1'
   gem 'github-pages'
   gem 'jekyll-remote-theme'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

# include markdown parser
gem "kramdown-parser-gfm"

gem "webrick", "~> 1.7"
