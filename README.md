# Start

### 2.설치 및 초기화

- 터미널 입력

```
npx create-next-app@latest
```

- page.tsx main안에 다지우기
- global.css tailwind초기화문 빼고 다 지우기

# Tailwind

- utility-first : tailwind 짧고 작은 이름을 많이 가지고 있다는 뜻
- ![alt text](image.png)

### modifier

```
hover:bg-green-600
 hover:scale-125
 // required등 html속성이 유효하지 않다고 판단할때 작동

```

### gradient

```
 bg-gradient-to-tr via-yellow-400 to-purple-400 from-cyan-500

```

### peer

```
형제 요소의 변화에 따라 class를 바꿀수 있는 peer 속성

```

```
*:outline-none *:md:text-red-500
```

### 자식선택자 '\*' 와 has

```
*:outline-none has-[.peer]:bg-green-100 *:md:text-red-500
```


~~~
odd:bg-gray-400 p-2.5 rounded-lg even:bg-gray-600 border border-b-orange-400 last:border-0
~~~

### 4가지 animation
~~~
//ping//pulse //spin
        <div className="size-6 bg-red-500 text-white flex items-center justify-center rounded-full animate-spi relative">
          <span>⌛</span>
          <div className="size-6 bg-red-500 rounded-full absolute animate-ping"/>
          //이렇게 배경개념의 태그를 만들어서 absolute를 주고 ping을 주면 로딩화면 처럼 퍼지는 효과를 줄 수있음
        </div>
~~~

### group
~~~
<div classname="group">
  <div classname="group-hover:text-red-500" />
</div>
~~~

### Directives 리셋데이터 변경하는법

@tailwind base; //reset css
@tailwind components;
@tailwind utilities; // class name에 대해 저장하고 컴파일링을시켜줌
// 리셋 데이터 변경하는방법
@layer base {
  a{
    color:blue 
  }
}

### form plugin 추가
- npm i @tailwindcss/forms
~~~
  plugins: [
    require("@tailwindcss/forms")
  ],
~~~


### daisyUI
- https://daisyui.com/


### heroicons
npm i @heroicon/react
