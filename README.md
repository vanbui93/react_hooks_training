REACT HOOKS - code được viết trong khi làm training của senior Hậu Nguyễn - kênh youtube : Easy Frontend<br>

## Table of Contents
- [Tài liệu tham khảo](#tài-liệu-tham-khảo)
- [Khi  nào dùng React Hooks ?](#khi-nào-dùng-react-hooks-?)
- [](#)
- [](#)
- [](#)
- [](#)

## Tài liệu tham khảo
S0: https://drive.google.com/file/d/11FZZ6B5TzASNTYEPSXTuywzJ9jqxR8Xq/view <br>
S1: https://drive.google.com/file/d/1eskBoT7LXXWWjdx3KjW2nhAB3eN2HZtn/view <br>
S2: https://drive.google.com/file/d/1Whnf_XkXGnawOU9Cobw9rzZCHwmbE6of/view <br>
S3: https://drive.google.com/file/d/1oFbDcgySdw6dHjHfx_nsR4xQ_qecthVz/view <br>
S4: https://drive.google.com/file/d/1AV7qev81543AbWx63ta5CUxMpsGvLCN4/view <br>


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



### useEffect()
### useContext()
### useReducer()

## Kết hợp Sass vào node
```sh
npm i --save-dev node-sass
```