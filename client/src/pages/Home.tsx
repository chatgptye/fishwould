import { APP_LOGO, APP_TITLE } from "@/const";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted/30">
      {/* الهيدر */}
      <header className="bg-primary text-primary-foreground py-8 shadow-lg">
        <div className="container">
          <div className="flex flex-col items-center gap-4">
            <img src={APP_LOGO} alt={APP_TITLE} className="w-32 h-32" />
            <h1 className="text-4xl md:text-5xl font-bold text-center">
              {APP_TITLE}
            </h1>
            <p className="text-xl text-center opacity-90">
              أطيب الأسماك الطازجة يومياً
            </p>
          </div>
        </div>
      </header>

      {/* قسم المنتجات */}
      <main className="flex-1 py-12">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">
            منتجاتنا المتوفرة
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>

      {/* التذييل */}
      <footer className="bg-primary text-primary-foreground py-8 mt-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* معلومات الاتصال */}
            <div>
              <h3 className="text-xl font-bold mb-4">تواصل معنا</h3>
              <p className="mb-2">📱 واتساب: 967781595851</p>
              <p className="mb-2">📍 اليمن</p>
            </div>

            {/* روابط المقالات */}
            <div>
              <h3 className="text-xl font-bold mb-4">مقالات مفيدة</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/articles/fresh" className="hover:underline">
                    كيف تميز السمك الطازج
                  </Link>
                </li>
                <li>
                  <Link href="/articles/benefits" className="hover:underline">
                    فوائد السمك الطازج
                  </Link>
                </li>
                <li>
                  <Link href="/articles/fish-info" className="hover:underline">
                    معلومات عن سمك
                  </Link>
                </li>
                <li>
                  <Link href="/articles/why-us" className="hover:underline">
                    لماذا نختار عالم السمك
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center">
            <p>&copy; 2025 {APP_TITLE}. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
