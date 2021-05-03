export default interface ParserArgument {
    argument: ArgumentType,
    value: ArgumentValue
}

export type ArgumentValue = string | number | undefined

export enum ArgumentType {
    Help = 'help',
    Git = 'git',
    From = 'from',
    Out = 'out'
}
