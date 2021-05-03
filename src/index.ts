import Parser from "./cli/Parser";
import ParserFactory from "./cli/ParserFactory";

const factory = new ParserFactory(process.argv)
const parser = factory.build()

if (parser.hasArgument('help')) {
    console.info('sturdy-waddle generadle --git=commit --from=tag --out=changelog.md' +
        'Options:' +
        '--git=amend|commit     Either amend or create new commit with git changelog' +
        '--from=tag|branch      Determines whether changelog should be created from tag or branch' +
        '--out=name.md          Name and file type of generated changelog. Currently only MD and TXT is supported'
    )
}
