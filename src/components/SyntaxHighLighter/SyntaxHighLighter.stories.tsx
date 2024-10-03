import type { Meta, StoryObj } from '@storybook/react';

import SyntaxHighLighter from './SyntaxHighLighter';

const meta = {
  title: 'Code/SyntaxHighLighter',
  component: SyntaxHighLighter
} satisfies Meta<typeof SyntaxHighLighter>;

export default meta;

type Story = StoryObj<typeof meta>;

const typescriptSample = `// インターフェースの定義
interface Animal {
  name: string;
  age: number;
  speak(): string;
}

// クラスの定義
class Dog implements Animal {
  name: string;
  age: number;
  static kingdom: string = "Animalia"; // 静的プロパティ

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  speak(): string {
    return \`\${this.name} barks.\`;
  }
}

// 関数の定義
function calculateArea(radius: number): number {
  const pi: number = Math.PI; // 定数
  return pi * radius ** 2;
}

// ジェネリクス
function identity<T>(arg: T): T {
  return arg;
}

// タプル
let person: [string, number] = ["Alice", 30];

// 列挙型
enum Color {
  Red,
  Green,
  Blue,
}

// 型定義
type Point = {
  x: number;
  y: number;
};

// 非同期関数
async function fetchData(url: string): Promise<any> {
  const response = await fetch(url);
  return response.json();
}

// 使用例
const dog = new Dog("Rex", 5);
console.log(dog.speak());

const area = calculateArea(5);
console.log(\`Area: \${area}\`);

const result = identity<string>("Hello");
console.log(\`Identity: \${result}\`);

console.log(\`Person: \${person[0]}, Age: \${person[1]}\`);

const favoriteColor: Color = Color.Green;
console.log(\`Favorite Color: \${Color[favoriteColor]}\`);

const point: Point = { x: 10, y: 20 };
console.log(\`Point: (\${point.x}, \${point.y})\`);

fetchData('https://api.example.com/data')
  .then(data => console.log(data))
  .catch(error => console.error(\`Error: \${error}\`));`;

const pythonSample = `# クラスの定義
class Animal:
    # クラス変数
    kingdom = "Animalia"

    # コンストラクタ
    def __init__(self, name, age):
        self.name = name  # インスタンス変数
        self.age = age

    # メソッド
    def speak(self):
        return f"{self.name} makes a noise."

# 継承
class Dog(Animal):
    def speak(self):
        return f"{self.name} barks."

# 関数定義
def calculate_area(radius):
    import math  # モジュールのインポート
    return math.pi * radius ** 2

# リスト内包表記
squares = [x**2 for x in range(10)]

# 辞書内包表記
square_dict = {x: x**2 for x in range(10)}

# ジェネレータ
def fibonacci(n):
    a, b = 0, 1
    while a < n:
        yield a
        a, b = b, a + b

# デコレータ
def debug(func):
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__} with {args} and {kwargs}")
        result = func(*args, **kwargs)
        print(f"{func.__name__} returned {result}")
        return result
    return wrapper

@debug
def add(x, y):
    return x + y

# 例外処理
try:
    result = 10 / 0
except ZeroDivisionError as e:
    print(f"Error: {e}")

# ファイル操作
with open('sample.txt', 'w') as file:
    file.write("Hello, World!")

# Lambda関数
multiply = lambda x, y: x * y

# 使用例
dog = Dog("Rex", 5)
print(dog.speak())

area = calculate_area(5)
print(f"Area: {area}")

fib_sequence = list(fibonacci(10))
print(f"Fibonacci: {fib_sequence}")

sum_result = add(3, 5)
print(f"Sum: {sum_result}")

product = multiply(4, 5)
print(f"Product: {product}")`;

export const SyntaxHighLighterDefault: Story = {
  args: {
    language: 'typescript',
    codeSnippet: typescriptSample
  }
};

export const PythonExample: Story = {
  args: {
    language: 'python',
    codeSnippet: pythonSample
  }
};
