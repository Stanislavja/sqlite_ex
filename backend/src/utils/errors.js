/* eslint-disable max-classes-per-file */
class CustomException extends Error {
  constructor(message, metadata) {
    super(message, metadata);
    this.metadata = metadata;
    this.code = 500;
  }
}

class NotFoundException extends CustomException {
  constructor(message, metadata) {
    super(message, metadata);
    this.metadata = metadata;
    this.code = 404;
  }
}

class BadRequestException extends CustomException {
  constructor(message, metadata) {
    super(message, metadata);
    this.metadata = metadata;
    this.code = 400;
  }
}

module.exports = { CustomException, NotFoundException, BadRequestException };
