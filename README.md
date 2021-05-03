# Sturdy Waddle
## _The coolest named git change log generator_

Sturdy Waddle is a cli-based, dev-not-ready, offline only,
NodeJS-powered GIT Changelog generator.

How to use in simple steps:
- Install the lib (some day even globally!)
- Write some code
- Commit that code using conventional commits (read more [here](https://www.conventionalcommits.org/en/v1.0.0-beta.2/))
- Run `npm run sturdy-waddle generadle` or `yarn sturdy-waddle generadle`
- ✨Magic ✨
- You got changelog for latest active tag *or* current branch

## Features availability

- [ ] Generates changelog
- [ ] Allows for setting changelog templates
- [ ] Allow for amending changelog into the latest commit or create new one

Sturdy Waddle is a hopefully lightweight changelog based on the ommiting conventions
that people generally use in their workflows in more structured projects.

As creator of Conventional Commits website linked few paragraphs earlier stated: 
> In software development, it’s been my experience that bugs are most often introduced at the boundaries 
> between applications. Unit testing works great for testing the interactions that an open-source maintainer > knows about, but do a poor job of capturing all the interesting, often unexpected, ways that a community 
> puts a library to use.

## Tech

This library uses a some of open source projects to work properly, I'll try to list all of them:

- [node.js] - evented I/O for the backend
- [typescript] - an open-source language which builds on JavaScript

And of course this project itself is open source with a [public repository][sturdy] on GitHub.

## Installation

Sturdy Waddle was created with [Node.js](https://nodejs.org/) v14+, thus it seem reasonable to expect at least this version for it to run.

Install the lib and run it

```sh
cd your/app
npm i kubabialy/sturdy-waddle
npm run sturdy-waddle generadle
```

For production environments... **Don't run it!**

## Development

Want to contribute? **Great!**

Open your favorite Terminal or an IDE, change what you feel needs changing and create a pull request explaining the reason behind those changes.

## Docker

I might add some docs later, but honestly see no reason to do so as this lib pretty easy to use already.

## License

MIT

**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax) and thanks Dillinger.io.

   [sturdy]: <https://github.com/kubabialy/sturdy-waddle>
   [node.js]: <http://nodejs.org>
   [typescript]: <https://www.typescriptlang.org>
