
var timestamp = require("./timestamp");
describe("Convert milliseconds", function() {

  it("should output seconds", function() {
    expect(timestamp(1510520707723)).toEqual(/[0-9]/ + 'm');
  });
  // need to grab current milliseconds and run this
  // within 60 seconds of grabbing Date.now()
  // 1510498680 = 11/12/17 @ 2:58pm
  // this is a unix timestamp and will not work
  // 1510520707723 = 11/12/17 @  15:05:07 this works

  it("should output minutes", function() {
    expect(timestamp(1510520707723)).toEqual(/[0-9]/ + 'm');
  });

  it("should output hours", function() {
    expect(timestamp(1510509661000)).toEqual('3h');
  });
  it("should output days", function() {
    expect(timestamp(1510164061000)).toEqual('4d');
    // 1510164061000 = 11/08/17 @ 12:01:01
  });
  it("should output weeks", function() {
    expect(timestamp(1508189037313)).toEqual('3w');
    // 1509469261000 = 10/31/2017 @ 12:01:01
  });
  it("should output months period", function() {
    expect(timestamp(1508086861000)).toEqual('4w');
    // 1508086861000 = 10/15/2017 @ 12:01:01
  });




});
