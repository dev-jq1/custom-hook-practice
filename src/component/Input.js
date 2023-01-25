function Input({ label, bind }) {
  //input을 컴포넌트로 만들어봅니다.
  //input도 컴포넌트도 만들게 되면 로직을 조금 더 고민을 해야 합니다.
  //고민을 한 번 해보고, 시도 해보세요!
  return (
    <div className="name-input">
      <label>{label}</label>
      <input {...bind} type="text" />
    </div>
  );
}

export default Input;
