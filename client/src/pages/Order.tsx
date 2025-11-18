import { useState, useEffect } from "react";
import { useLocation, useSearch } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { products } from "@/data/products";
import { APP_LOGO, APP_TITLE } from "@/const";
import { toast } from "sonner";

interface OrderForm {
  quantity: number;
  customerName: string;
  street: string;
  landmark: string;
  phone: string;
  preparation: string;
  discountCode: string;
}

const PREPARATION_OPTIONS = [
  { value: "raw", label: "نيئ", price: 0 },
  { value: "sanonah", label: "صانونة", price: 1000 },
  { value: "broasted", label: "بروست", price: 800 },
  { value: "mofa", label: "موفى", price: 500 },
  { value: "oil", label: "زيت", price: 500 },
];

const DELIVERY_FEE = 800;
const DISCOUNT_CODE = "FISH2025";
const DISCOUNT_PERCENTAGE = 10;

export default function Order() {
  const searchParams = useSearch();
  const [, setLocation] = useLocation();
  const productId = new URLSearchParams(searchParams).get("product");
  
  const product = products.find((p) => p.id === Number(productId));

  const [form, setForm] = useState<OrderForm>({
    quantity: 1,
    customerName: "",
    street: "",
    landmark: "",
    phone: "",
    preparation: "raw",
    discountCode: "",
  });

  const [totals, setTotals] = useState({
    productTotal: 0,
    preparationCost: 0,
    subtotal: 0,
    discount: 0,
    deliveryFee: DELIVERY_FEE,
    total: 0,
  });

  useEffect(() => {
    if (!product) return;

    const preparationOption = PREPARATION_OPTIONS.find(
      (opt) => opt.value === form.preparation
    );
    const preparationCost = preparationOption?.price || 0;
    const productTotal = product.price * form.quantity;
    const subtotal = productTotal + preparationCost;
    
    let discount = 0;
    if (form.discountCode.toUpperCase() === DISCOUNT_CODE) {
      discount = Math.floor(subtotal * (DISCOUNT_PERCENTAGE / 100));
    }
    
    const total = subtotal - discount + DELIVERY_FEE;

    setTotals({
      productTotal,
      preparationCost,
      subtotal,
      discount,
      deliveryFee: DELIVERY_FEE,
      total,
    });
  }, [product, form.quantity, form.preparation, form.discountCode]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.quantity === 0) {
      toast.error("الرجاء اختيار كمية أكبر من صفر");
      return;
    }

    if (!form.customerName || !form.street || !form.landmark || !form.phone) {
      toast.error("الرجاء ملء جميع الحقول المطلوبة");
      return;
    }

    if (!product) return;

    const preparationOption = PREPARATION_OPTIONS.find(
      (opt) => opt.value === form.preparation
    );

    let message = `*طلب جديد من ${APP_TITLE}*\n\n`;
    message += `📦 *المنتج:* ${product.name}\n`;
    message += `🔢 *الكمية:* ${form.quantity}\n`;
    message += `👤 *الاسم:* ${form.customerName}\n`;
    message += `📍 *الشارع:* ${form.street}\n`;
    message += `🏠 *معلم قريب:* ${form.landmark}\n`;
    message += `📱 *رقم الهاتف:* ${form.phone}\n`;
    message += `🍽️ *طريقة التحضير:* ${preparationOption?.label}\n\n`;
    message += `💰 *تفاصيل الفاتورة:*\n`;
    message += `• سعر المنتج: ${totals.productTotal.toLocaleString('ar-YE')} ريال\n`;
    if (totals.preparationCost > 0) {
      message += `• تكلفة التحضير: ${totals.preparationCost.toLocaleString('ar-YE')} ريال\n`;
    }
    if (totals.discount > 0) {
      message += `• الخصم (${form.discountCode}): -${totals.discount.toLocaleString('ar-YE')} ريال\n`;
    }
    message += `• رسوم التوصيل: ${totals.deliveryFee.toLocaleString('ar-YE')} ريال\n`;
    message += `• *الإجمالي: ${totals.total.toLocaleString('ar-YE')} ريال*`;

    const whatsappUrl = `https://wa.me/967781595851?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="pt-6">
            <p className="text-center text-lg mb-4">المنتج غير موجود</p>
            <Button onClick={() => setLocation("/")} className="w-full">
              العودة للصفحة الرئيسية
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 py-8">
      <div className="container max-w-4xl">
        {/* الهيدر */}
        <div className="text-center mb-8">
          <img src={APP_LOGO} alt={APP_TITLE} className="w-24 h-24 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-primary mb-2">إتمام الطلب</h1>
          <Button
            variant="outline"
            onClick={() => setLocation("/")}
            className="mt-2"
          >
            العودة للصفحة الرئيسية
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* معلومات المنتج */}
          <Card>
            <CardHeader>
              <CardTitle>تفاصيل المنتج</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <img src="/fish-icon.svg" alt={product.name} className="w-16 h-16" />
                <div>
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                  <p className="text-primary font-bold">
                    {product.price.toLocaleString('ar-YE')} ريال
                  </p>
                </div>
              </div>

              <div>
                <Label htmlFor="quantity">الكمية</Label>
                <Input
                  id="quantity"
                  type="number"
                  min="0"
                  value={form.quantity}
                  onChange={(e) =>
                    setForm({ ...form, quantity: Number(e.target.value) })
                  }
                  className="mt-1"
                />
              </div>
            </CardContent>
          </Card>

          {/* معلومات العميل */}
          <Card>
            <CardHeader>
              <CardTitle>معلومات العميل</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="customerName">الاسم *</Label>
                <Input
                  id="customerName"
                  value={form.customerName}
                  onChange={(e) =>
                    setForm({ ...form, customerName: e.target.value })
                  }
                  className="mt-1"
                  required
                />
              </div>

              <div>
                <Label htmlFor="street">اسم الشارع *</Label>
                <Input
                  id="street"
                  value={form.street}
                  onChange={(e) => setForm({ ...form, street: e.target.value })}
                  className="mt-1"
                  required
                />
              </div>

              <div>
                <Label htmlFor="landmark">معلم قريب *</Label>
                <Input
                  id="landmark"
                  value={form.landmark}
                  onChange={(e) =>
                    setForm({ ...form, landmark: e.target.value })
                  }
                  className="mt-1"
                  required
                />
              </div>

              <div>
                <Label htmlFor="phone">رقم الواتساب أو الاتصال *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="mt-1"
                  required
                />
              </div>
            </CardContent>
          </Card>

          {/* خيارات التحضير */}
          <Card>
            <CardHeader>
              <CardTitle>طريقة التحضير</CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup
                value={form.preparation}
                onValueChange={(value) =>
                  setForm({ ...form, preparation: value })
                }
              >
                {PREPARATION_OPTIONS.map((option) => (
                  <div
                    key={option.value}
                    className="flex items-center justify-between space-x-2 space-x-reverse py-2"
                  >
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <RadioGroupItem value={option.value} id={option.value} />
                      <Label htmlFor={option.value} className="cursor-pointer">
                        {option.label}
                      </Label>
                    </div>
                    <span className="text-sm font-medium">
                      {option.price === 0
                        ? "مجاناً"
                        : `+${option.price.toLocaleString('ar-YE')} ريال`}
                    </span>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
          </Card>

          {/* كود الخصم */}
          <Card>
            <CardHeader>
              <CardTitle>كود الخصم</CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <Label htmlFor="discountCode">أدخل كود الخصم (اختياري)</Label>
                <Input
                  id="discountCode"
                  value={form.discountCode}
                  onChange={(e) =>
                    setForm({ ...form, discountCode: e.target.value })
                  }
                  placeholder="مثال: FISH2025"
                  className="mt-1"
                />
                {form.discountCode.toUpperCase() === DISCOUNT_CODE && (
                  <p className="text-sm text-green-600 mt-2">
                    ✓ تم تطبيق خصم {DISCOUNT_PERCENTAGE}%
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* ملخص الفاتورة */}
          <Card className="bg-primary/5">
            <CardHeader>
              <CardTitle>ملخص الفاتورة</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between">
                <span>سعر المنتج:</span>
                <span className="font-semibold">
                  {totals.productTotal.toLocaleString('ar-YE')} ريال
                </span>
              </div>
              {totals.preparationCost > 0 && (
                <div className="flex justify-between">
                  <span>تكلفة التحضير:</span>
                  <span className="font-semibold">
                    {totals.preparationCost.toLocaleString('ar-YE')} ريال
                  </span>
                </div>
              )}
              {totals.discount > 0 && (
                <div className="flex justify-between text-green-600">
                  <span>الخصم:</span>
                  <span className="font-semibold">
                    -{totals.discount.toLocaleString('ar-YE')} ريال
                  </span>
                </div>
              )}
              <div className="flex justify-between">
                <span>رسوم التوصيل:</span>
                <span className="font-semibold">
                  {totals.deliveryFee.toLocaleString('ar-YE')} ريال
                </span>
              </div>
              <div className="border-t pt-2 mt-2">
                <div className="flex justify-between text-lg font-bold text-primary">
                  <span>الإجمالي:</span>
                  <span>{totals.total.toLocaleString('ar-YE')} ريال</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* زر الإرسال */}
          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6"
          >
            إرسال الطلب عبر واتساب
          </Button>
        </form>
      </div>
    </div>
  );
}
