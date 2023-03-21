export function LeftDrawer() {
  return (
    <div>
      <div>
        <h2>user profile 요구사항</h2>
        logout, config 버튼을 제공할 것
        <br />
        ++사용자를 대표하는 이미지를 출력할 것
      </div>
      <div>
        <h2>chat list 영역 요구사항</h2>
        사용자의 대화 상태를 리스트 형태로 노출할 것
        <br />
        ++읽지 않은 채팅을 상대방 UI에 표시할 것
      </div>
      <h1>nav영역 요구사항</h1>
      대화할 상대방을 추가하는 기능
      <br />
      좌측에 위치할것
      <br />
      사용자의 관심사가 main일 때는 축소된 보기를 제공할 것
      <br />
      login하지 않았을 때 노출하지 않을 것
    </div>
  );
}
