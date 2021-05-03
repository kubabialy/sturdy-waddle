import ParserFactory from "./ParserFactory";
import {ArgumentType} from "./ParserArgument";

test('recognized passed help argument', () => {
    const args = [
        'some/unexisting/path',
        'node',
        '--help'
    ]

    const factory = new ParserFactory(args)
    const parser = factory.build()
    const result = parser.hasArgument(ArgumentType.Help)

    expect(result).toBe(true)
})
