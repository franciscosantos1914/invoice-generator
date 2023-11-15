export class AppError extends Error {
    constructor({ message }: { message: string }) {
        super(message)
    }
}