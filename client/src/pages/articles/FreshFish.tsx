import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { APP_LOGO, APP_TITLE } from "@/const";
import { useLocation } from "wouter";

export default function FreshFish() {
  const [, setLocation] = useLocation();

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
              كيف تميز السمك الطازج
            </h2>

            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                السمك الطازج هو أساس الوجبة الصحية واللذيذة. معرفة كيفية التمييز بين السمك الطازج والسمك غير الطازج أمر ضروري لضمان جودة طعامك وصحة عائلتك. في هذا المقال، نقدم لك العلامات الأساسية التي تساعدك على اختيار أطيب الأسماك.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-6">
                1. العيون
              </h3>
              <p>
                العيون هي أول ما يجب أن تنظر إليه عند شراء السمك. السمك الطازج يتميز بعيون لامعة وبراقة ونقية، تبدو وكأنها حية. أما السمك غير الطازج فتكون عيونه غائمة أو باهتة أو غارقة في التجويف.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-6">
                2. الخياشيم
              </h3>
              <p>
                الخياشيم في السمك الطازج تكون حمراء زاهية أو وردية اللون، رطبة ونظيفة. إذا كانت الخياشيم بنية أو رمادية أو لزجة، فهذا يعني أن السمك ليس طازجاً. الخياشيم هي من أهم المؤشرات على جودة السمك.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-6">
                3. الرائحة
              </h3>
              <p>
                السمك الطازج له رائحة بحرية خفيفة ونظيفة، تشبه رائحة البحر أو الطحالب البحرية. لا يجب أن تكون الرائحة قوية أو كريهة أو تشبه رائحة الأمونيا. إذا شممت رائحة نفاذة أو غير محببة، فالسمك ليس طازجاً.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-6">
                4. الملمس والجلد
              </h3>
              <p>
                عند الضغط بلطف على جسم السمك الطازج، يجب أن يعود اللحم إلى شكله الطبيعي بسرعة ولا يترك أثراً. الجلد يجب أن يكون لامعاً ورطباً ومغطى بطبقة رقيقة من المخاط الطبيعي. القشور يجب أن تكون ملتصقة بإحكام بالجلد.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-6">
                5. اللحم
              </h3>
              <p>
                لحم السمك الطازج يكون صلباً ومتماسكاً ولامعاً. عند قطع السمك، يجب أن يكون اللحم شفافاً قليلاً وليس معتماً أو جافاً. اللحم المتفتت أو الرخو يدل على أن السمك قديم.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-6">
                نصائح إضافية
              </h3>
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li>اشترِ السمك من مصادر موثوقة ومعروفة بجودتها</li>
                <li>تأكد من أن السمك محفوظ على الثلج أو في ثلاجات مناسبة</li>
                <li>اسأل البائع عن موعد وصول السمك</li>
                <li>تجنب شراء السمك المجمد ثم المذاب إلا إذا كنت متأكداً من جودته</li>
                <li>استهلك السمك الطازج في أسرع وقت ممكن بعد الشراء</li>
              </ul>

              <div className="bg-primary/10 p-6 rounded-lg mt-8">
                <p className="font-semibold text-primary text-xl">
                  في عالم السمك، نضمن لك أطيب الأسماك الطازجة يومياً!
                </p>
                <p className="mt-2">
                  نحن نختار أسماكنا بعناية فائقة ونحرص على تطبيق جميع معايير الجودة لنقدم لك أفضل تجربة.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
