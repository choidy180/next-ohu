import axios from "axios";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
    // 로그인 방식 설정하기
    providers: [
        // 인증 방식 선택 (현재는 'id' + 'password');
        CredentialsProvider({
            // 이 곳에서 입력한 이름을 'SignIn(이름) 형태로 사용'
            name: 'Credentials',
            // 여기서 작성한 타입 그대로 아래 'authorize()'의 'credentials'의 타입 적용
            // 또한 'next-auth'에서 생성해주는 로그인창에서 사용 ( http://localhost:3000/api/auth/signin )
            credentials: {
                id: {
                    label: '아이디',
                    type: 'password',
                    placeholder: '비밀번호를 입력하세요.',
                },
            },

            // 로그인 유효성 검사
            // 로그인 요청인 signIn('credentials', {id, password}) 에서 넣어준 'id','password'값이 그대로 들어옴
            async authorize(credentials, req){
                
            }
        })
    ]
})