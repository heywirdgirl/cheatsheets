my-practice-app/
├── app/
│   ├── page.tsx               # Menu chính danh sách dự án
│   └── projects/
│       └── [slug]/
│           └── page.tsx       # File ROUTER DUY NHẤT xử lý tất cả dự án
├── features/                  # Nơi code logic thực tế của từng dự án
│   ├── countdown-timer/
│   │   ├── components/        # Component riêng của dự án này
│   │   └── index.tsx          # Giao diện chính của Countdown
│   ├── weather-widget/
│   │   └── index.tsx
│   └── registry.ts            # File "bản đồ" kết nối Router và Features

// features/registry.ts
import CountdownTimer from './countdown-timer';
import WeatherWidget from './weather-widget';
// import các dự án khác vào đây...

export const projectRegistry: Record<string, React.ComponentType> = {
  'countdown-timer': CountdownTimer,
  'weather-widget': WeatherWidget,
  // Cứ thêm dự án mới thì viết thêm 1 dòng ở đây là xong
};

// app/projects/[slug]/page.tsx
import { projectRegistry } from '@/features/registry';
import { notFound } from 'next/navigation';

// Định nghĩa Type chuẩn cho Next.js 15 (params là một Promise)
type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectRouterPage({ params }: Props) {
  // Điểm mới của Next 15: BẮT BUỘC phải await params
  const { slug } = await params; 

  // Lấy component từ registry ra
  const TargetProject = projectRegistry[slug];

  // Nếu slug không tồn tại trong danh sách 22 dự án -> Kích hoạt trang 404
  if (!TargetProject) {
    notFound();
  }

  // Render dự án tương ứng
  return (
    <div className="w-full min-h-screen bg-background p-6">
      <TargetProject />
    </div>
  );
}

/**
 * MẸO TỐI ƯU CHO NEXT.JS 15:
 * Hàm này giúp Next.js tự động chuyển các trang động [slug] thành trang TĨNH (Static HTML) lúc build.
 * Giúp tốc độ chuyển giữa 22 dự án của bạn mượt và nhanh như chớp (Instant loading).
 */
export async function generateStaticParams() {
  return Object.keys(projectRegistry).map((slug) => ({
    slug: slug,
  }));
}

<Link href="/projects/countdown-timer">

// app/page.tsx
import Link from 'next/link';

const projects = [
  { id: '01', name: 'Countdown Timer', slug: 'countdown-timer' },
  { id: '02', name: 'Weather Widget', slug: 'weather-widget' },
  { id: '03', name: 'Birthday Wish', slug: 'birthday-wish' },
  // ... Thêm đủ 22 dự án vào đây
];

export default function HomePage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">My Learning Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((project) => (
          <Link 
            key={project.id} 
            href={`/projects/${project.slug}`} // Hoặc `/${project.slug}` tùy theo Cách bạn chọn ở trên
            className="p-4 border rounded-lg hover:bg-gray-100 transition block"
          >
            <span className="text-gray-500 mr-2">{project.id}.</span>
            <span className="font-medium">{project.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

