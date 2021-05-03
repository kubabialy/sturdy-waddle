import Parser from "./Parser";
import ParserArgument, {ArgumentType} from "./ParserArgument";

export default class ParserFactory {
    constructor(private args: Array<string>) {}

    public build(): Parser {
        const args: Array<ParserArgument> = this.args.map((arg: string) => {
            const isHelp = arg.includes('--help')
            if (!arg.includes('=') && !isHelp) {
                return;
            }

            if (isHelp) {
                return {
                    argument: ArgumentType.Help,
                    value: undefined
                }
            }

            const a = arg.split('=')
            let type = a[0].split('--').pop()

            if (ArgumentType[type]) {
                let argumentType: ArgumentType;
                switch (type) {
                    case ArgumentType.From:
                        argumentType = ArgumentType.From
                        break
                    case ArgumentType.Git:
                        argumentType = ArgumentType.Git
                        break
                    case ArgumentType.Out:
                        argumentType = ArgumentType.Out
                        break
                    default:
                        return;
                }
                return {
                    argument: argumentType,
                    value: a[1]
                }
            }

            return;
        }).filter((el: any) => el != null)

        return new Parser(args)
    }
}
