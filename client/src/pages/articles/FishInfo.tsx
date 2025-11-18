import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { APP_LOGO, APP_TITLE } from "@/const";
import { useLocation } from "wouter";

const fishInfo: Record<string, { description: string; benefits: string[] }> = {
  ديرك: {
    description:
      "سمك الديرك من أفخر أنواع الأسماك في البحر الأحمر واليمن، يتميز بلحمه الأبيض الطري وطعمه الرائع. يعتبر من الأسماك الفاخرة والمفضلة في المناسبات الخاصة.",
    benefits: [
      "غني بالبروتين عالي الجودة",
      "يحتوي على أوميغا 3 بنسبة عالية",
      "قليل الدهون والسعرات الحرارية",
      "مصدر ممتاز لفيتامين D والسيلينيوم",
    ],
  },
  جحش: {
    description:
      "سمك الجحش من الأسماك الشعبية المحبوبة، يتميز بطعمه اللذيذ وسعره المناسب. لحمه طري وسهل الهضم، ويصلح للشوي والقلي.",
    benefits: [
      "غني بالبروتين",
      "يحتوي على فيتامينات B المركبة",
      "مصدر جيد للفوسفور والكالسيوم",
      "مناسب للأطفال وكبار السن",
    ],
  },
  فارس: {
    description:
      "سمك الفارس من الأسماك المتوسطة الحجم، يتميز بلحمه الأبيض ونكهته المميزة. يعتبر من الأسماك المفضلة للطهي المنزلي.",
    benefits: [
      "غني بالأوميغا 3",
      "يحتوي على معادن مهمة",
      "سهل التحضير والطهي",
      "مناسب لجميع طرق الطهي",
    ],
  },
  سلمون: {
    description:
      "السلمون من أشهر الأسماك في العالم، يتميز بلونه الوردي المميز وطعمه الغني. يعتبر من أكثر الأسماك فائدة صحياً.",
    benefits: [
      "أعلى نسبة أوميغا 3 بين الأسماك",
      "غني بفيتامين D وB12",
      "يحسن صحة القلب والدماغ",
      "مضاد قوي للالتهابات",
    ],
  },
  مرجان: {
    description:
      "سمك المرجان من الأسماك الجميلة والمميزة، يتميز بألوانه الزاهية ولحمه الطري. يعتبر من الأسماك الفاخرة ذات القيمة الغذائية العالية.",
    benefits: [
      "غني بالبروتين والمعادن",
      "يحتوي على أوميغا 3",
      "مصدر جيد لليود",
      "يدعم صحة الغدة الدرقية",
    ],
  },
  هامور: {
    description:
      "الهامور من أشهر الأسماك في الخليج العربي والبحر الأحمر، يتميز بحجمه الكبير ولحمه السميك الطري. يعتبر من ألذ الأسماك وأكثرها قيمة.",
    benefits: [
      "غني جداً بالبروتين",
      "يحتوي على أوميغا 3 وأوميغا 6",
      "مصدر ممتاز للسيلينيوم",
      "يقوي المناعة ويحسن صحة القلب",
    ],
  },
  جمبري: {
    description:
      "الجمبري (الروبيان) من أشهر المأكولات البحرية، يتميز بطعمه الحلو ولحمه الطري. غني بالبروتين وقليل السعرات الحرارية.",
    benefits: [
      "غني بالبروتين ومنخفض الدهون",
      "يحتوي على مضادات أكسدة قوية",
      "مصدر ممتاز للسيلينيوم والزنك",
      "يدعم صحة العظام والمفاصل",
    ],
  },
  شروخ: {
    description:
      "الشروخ (الكركند) من أفخر المأكولات البحرية، يتميز بلحمه الأبيض الطري وطعمه الرائع. يعتبر من الأطباق الفاخرة في المناسبات الخاصة.",
    benefits: [
      "غني جداً بالبروتين",
      "يحتوي على أوميغا 3 وفيتامين B12",
      "مصدر ممتاز للنحاس والزنك",
      "يدعم صحة الجهاز العصبي",
    ],
  },
};

export default function FishInfo() {
  const [, setLocation] = useLocation();
  const [selectedFish, setSelectedFish] = useState<string>("");

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <header className="bg-primary text-primary-foreground py-6 shadow-lg">
        <div className="container">
          <div className="flex items-center gap-4">
            <img src={APP_LOGO} alt={APP_TITLE} className="w-16 h-16" />
            <h1 className="text-3xl font-bold">{APP_TITLE}</h1>
          </div>
        </div>
      </header>

      <main className="container py-12 max-w-4xl">
        <Button
          variant="outline"
          onClick={() => setLocation("/")}
          className="mb-6"
        >
          العودة للصفحة الرئيسية
        </Button>

        <Card>
          <CardContent className="pt-6 space-y-6">
            <h2 className="text-3xl font-bold text-primary mb-6">
              معلومات عن الأسماك
            </h2>

            <div className="space-y-4">
              <p className="text-lg leading-relaxed">
                تعرف على أنواع الأسماك المختلفة وفوائدها الصحية. اختر نوع السمك من القائمة أدناه للحصول على معلومات مفصلة عنه.
              </p>

              <div className="space-y-2">
                <Label htmlFor="fish-select">اختر نوع السمك</Label>
                <Select value={selectedFish} onValueChange={setSelectedFish}>
                  <SelectTrigger id="fish-select">
                    <SelectValue placeholder="اختر نوع السمك..." />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.keys(fishInfo).map((fish) => (
                      <SelectItem key={fish} value={fish}>
                        سمك {fish}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {selectedFish && fishInfo[selectedFish] && (
                <div className="mt-8 space-y-6 animate-in fade-in duration-500">
                  <div className="bg-primary/10 p-6 rounded-lg">
                    <h3 className="text-2xl font-bold text-primary mb-4">
                      سمك {selectedFish}
                    </h3>
                    <p className="text-lg leading-relaxed">
                      {fishInfo[selectedFish].description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-primary mb-4">
                      الفوائد الصحية:
                    </h4>
                    <ul className="space-y-3">
                      {fishInfo[selectedFish].benefits.map((benefit, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-lg"
                        >
                          <span className="text-primary text-2xl">✓</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-muted p-6 rounded-lg">
                    <p className="font-semibold text-lg">
                      💡 نصيحة: للحصول على أقصى فائدة من السمك، احرص على تناوله طازجاً واختر طرق الطهي الصحية مثل الشوي أو البخار.
                    </p>
                  </div>
                </div>
              )}

              {!selectedFish && (
                <div className="text-center py-12 text-muted-foreground">
                  <img
                    src="/fish-icon.svg"
                    alt="سمك"
                    className="w-32 h-32 mx-auto mb-4 opacity-50"
                  />
                  <p className="text-lg">اختر نوع السمك لعرض المعلومات</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
