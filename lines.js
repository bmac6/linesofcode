let friends = ["Sammy", "Lisa", "Jack", "Bob", "Frank"];
//console.log(firends)
//console.log(firends[0]);
function codeCall() {
  const lineFirst = "lines of code in the file,";
  const lineSecond = "lines of code;";
  const lineThird = "strikes one out, clears it all out,";

  for (let v = 0; v < friends.length; v++) {
    const element = friends[v];
    console.log(element + ":");
    for (let i = 99; i > 0; i--) {
      let r = i - 1;
      if (i === 2) {
        console.log(
          i +
            " " +
            "lines of code in the file, " +
            i +
            " lines of code " +
            friends[v] +
            " strikes one out, clears it all out, " +
            r +
            " " +
            "line of code in the file"
        );
      } else if (i === 1) {
        console.log(
          i +
            " " +
            "line of code in the file, " +
            i +
            " line of code " +
            friends[v] +
            " strikes one out, clears it all out, " +
            r +
            " " +
            lineFirst
        );
      } else {
        console.log(
          i +
            " " +
            lineFirst +
            i +
            " " +
            lineSecond +
            friends[v] +
            " " +
            lineThird +
            r +
            " " +
            lineFirst
        );
      }
    }
  }
}
codeCall();
