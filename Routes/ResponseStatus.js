//Information about http request status and code status obtained from
// https://developer.mozilla.org/es/docs/Web/HTTP/Status

const responseStatus = {
  Ok : 200,
  Created: 201,
  Accepted : 202,
  BadRequest :  400,
  Unauthorized : 401,
  Forbidden : 403,
  NotFound : 404,
  InternalServerError : 500,
  ServiceUnavailable : 503,
};

module.exports = responseStatus;
