import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Product } from "@/data/products";
import { useLocation } from "wouter";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [, setLocation] = useLocation();

  const handleOrder = () => {
    setLocation(`/order?product=${product.id}`);
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardContent className="pt-6 pb-4">
        <div className="flex flex-col items-center gap-4">
          {/* أيقونة السمكة */}
          <div className="w-24 h-24 flex items-center justify-center">
            <img 
              src="/fish-icon.svg" 
              alt={product.name}
              className="w-full h-full object-contain"
            />
          </div>
          
          {/* اسم المنتج */}
          <h3 className="text-lg font-semibold text-center text-primary">
            {product.name}
          </h3>
          
          {/* السعر */}
          <div className="text-2xl font-bold text-primary">
            {product.price.toLocaleString('ar-YE')} ريال
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="pb-6">
        <Button 
          onClick={handleOrder}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          اطلب الآن
        </Button>
      </CardFooter>
    </Card>
  );
}
