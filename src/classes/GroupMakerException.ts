class GroupMakerException extends Error {
  constructor(message: string) {
    super();
    this.message = message;
  }
}

export default GroupMakerException;
