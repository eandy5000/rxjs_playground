export function basic(onNext) {
  console.log(`subscriber ${onNext}`);
}

export function higher(nameParam) {
  return function(observerOnNext) {
    console.log(`subscriber ${nameParam} ${observerOnNext}`);
  };
}
