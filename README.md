REACT HOOKS - code được viết trong khi làm training của senior Hậu Nguyễn - kênh youtube : Easy Frontend<br>

## Table of Contents
- [Tài liệu tham khảo](#tài-liệu-tham-khảo)
- [Khi  nào dùng React Hooks ?](#khi-nào-dùng-react-hooks-?)
- [Tại sao nên dùng hooks ?](###tại-sao-nên-dùng-hooks-?)
- [useState()](#usestate)
- [useEffect()](#useeffect)
- [Cài đặt component Pagination](#cài-đặt-component-pagination)

## Tài liệu tham khảo
S0: https://drive.google.com/file/d/11FZZ6B5TzASNTYEPSXTuywzJ9jqxR8Xq/view <br>
S1: https://drive.google.com/file/d/1eskBoT7LXXWWjdx3KjW2nhAB3eN2HZtn/view <br>
S2: https://drive.google.com/file/d/1Whnf_XkXGnawOU9Cobw9rzZCHwmbE6of/view <br>
S3: https://drive.google.com/file/d/1oFbDcgySdw6dHjHfx_nsR4xQ_qecthVz/view <br>
S4: https://drive.google.com/file/d/1AV7qev81543AbWx63ta5CUxMpsGvLCN4/view <br>
S5: https://drive.google.com/file/d/10WarKgzSM5Ou1R64OqdiutEl_Y2hDIXG/view <br>
S6: https://drive.google.com/file/d/1CXxCJsabcG3IkSG1PQaWNVv12ePYICA1/view <br>
S7: https://drive.google.com/file/d/1UzWLVDvZ7LwsCDrttGyQB6zJve0YA_TU/view <br>
S8: https://drive.google.com/file/d/1u-wdW1gbRl3OksMzQwzTNqayyK-qNB50/view <br>


## Khi  nào dùng React Hooks ?
- Khi muốn dùng state, life cycle,... mà không thích làm việc với class (OOP)
- Chỉ sử dụng cho Functional component không dùng cho class.
## Tại sao nên dùng hooks ?
- No breaking changes
- Có thể dùng vừa class component cũ, vừa dùng thử nghiệm react hooks.
- Không có kế hoạch bỏ class component.
- Không xóa bỏ kiến thức đã  biết về react: state, life cycle, context,...
### useState()
- Là 1 hook cơ bản
- Giúp mình có thể dùng state trong functional component
- Input: initialState (giá trị mặc định function)
- Output: Một mãng có 2 phần tử tương ứng cho [state,setState]
- useState(): áp dụng replacing thay vì merging như bên class component
- Initial state callback chỉ thực thi 1 lần đầu
- Cách dùng :<br>
`useState('Vân')` là giá trị khởi tạo của `color` <br>
Khi muốn update state sử dụng `setColor`
```js
const [color,setColor] = useState('Vân');
```

***Tìm 1 phần tử ở vị trí index***
```js
const index = todoList.findIndex(x => x.id === todo.id);
if(index !== -1) {
  const newTodoList = [...todoList];   //Nhớ clone ra list mới
  newTodoList.splice(index,1);
  setTodoList(newTodoList);
}
```

### useEffect()
SideEffect là gì ?
- Gọi API lấy dữ liệu
- Subscriptions
- setTimeout, setInterval<br>

useEffect() là 1 hook cơ bản <br>
- Mỗi hook gồm 2 phần: `side effect` và `clean up`
- Được thực thi sau mỗi lần `render`.
- Được thực thi ít nhất một lần sau lần render đầu tiên
- Những lần render sau, chỉ được thực thi nếu có dependencies thay đổi (phụ thuộc)
- Effect cleanup sẽ được thực thi trước run effect lần tiếp theo hoặc unmount.
- Cú pháp
```js
function useEffect(callback, dependencies) {}
```

```js
function App() {
// executed before each render
const [color, setColor] = useState('deeppink');
// executed after each render
useEffect(() => {
// do your side effect here ...
return () => {
// Clean up here ...
// Executed before the next render or unmount
};
}, []);
// rendering
return <h1>Easy Frontend</h1>;
}
```

### Cài đặt component Pagination
- Có 2 nút : Prev, Next
- Props:
 -- pagination: required<br>
 -- `onPageChange`: hàm này sẽ được gọi nếu user click nút next hoặc prev
- State: N/A
- Render:
 -- Nút prev: trigger hàm `onPageChange` với page = page - 1<br>
 -- Nút next: trigger hàm `onPageChange` với page = page + 1<br>
- Lưu ý: 
 -- nút **prev** sẽ bị disable nếu đang ở trang 1<br>
 -- nút **next** sẽ bị disable nếu đang ở trang cuối
### Cài đặt package chuyển object thành queryString
```sh
npm i --save query-string
```

vd<br>
object
```js
{
  _limit: 10,
  _page: 1,
}
```
queryString
```js
_limit=10&page=1
```

### useContext()
### useReducer()

## Kết hợp Sass vào node
```sh
npm i --save-dev node-sass
```