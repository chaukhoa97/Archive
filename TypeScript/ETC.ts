//? Enum
//* Number enum
{
  enum Status0 {
    Pending, // 0
    Approved, // 1
    Rejected, // 2
  }
  enum Status1 {
    Pending = 1, // 1
    Approved, // 2
    Rejected = 10, // 10
  }
  const s1: Status0 = Status0.Approved;
  const sAny: Status1 = 1000;
  // Reverse mapping
  console.log(Status1[10]); // Rejected
}
//* String enum: KHÔNG REVERSE MAPPING như Number enum dc
{
  enum ResponseTypes {
    Success = 'SUCCESS',
    Error = 'ERROR',
  }
  const ss: ResponseTypes.Success = ResponseTypes.Success; // 'SUCCESS'
}

//? Non-null assertion Operator: !
function liveDangerously(x?: number | null) {
  //* No error
  console.log(x!.toFixed());
}
