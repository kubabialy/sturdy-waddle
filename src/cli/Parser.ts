import ParserArgument, {ArgumentType} from "./ParserArgument";

export default class Parser {
    constructor(private args: Array<ParserArgument>) {}

    public hasArgument(argument: ArgumentType): boolean {
        for (let i = 0; i < this.args.length; i++) {
            if (this.args[i].argument === argument) {
                return true
            }
        }

        return false;
    }

    private prepareArguments(args: Array<string>): void {

    }
}
