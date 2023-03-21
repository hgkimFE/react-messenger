import { useAppDispatch, useAppSelector } from "../app/hooks";
import logo from "../assets/logo.svg";
import { login, logout, selectAuthToken } from "../features/auth/authSlice";
export function MainPage() {
  const authToken = useAppSelector(selectAuthToken);
  const dispatch = useAppDispatch();
  return (
    <header className="App-header">
      <button onClick={() => dispatch(login())}>로그인</button>
      <button onClick={() => dispatch(logout())}>로그아웃</button>
      <p>{authToken}</p>
      <img src={logo} className="App-logo" alt="logo" />
      <h1>main 영역 요구사항</h1>
      login하지 않았을 때 login page를 표시할 것
      <br />
      상대방과의 대화를 실시간으로 표시할것.
      <br />
      해당 채팅방으로 전환됐을 때, 이전에 어디까지 읽었는지 표시할 것
      <br />
      내 메시지를 상대방이 읽었는지 표시할 것
      <br />
      상대방의 프로필을 클릭하면 프로필 오버레이를 출력할 것
      <br />
      ++일치하는 문자열을 찾는 검색 기능을 제공할 것
      <br />
      ++공지, 투표, 답장 기능 구현
    </header>
  );
}
