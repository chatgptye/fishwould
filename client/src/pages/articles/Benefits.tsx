import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { APP_LOGO, APP_TITLE } from "@/const";
import { useLocation } from "wouter";

export default function Benefits() {
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
              فوائد السمك الطازج
            </h2>

            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                السمك الطازج ليس فقط لذيذاً، بل هو أيضاً من أكثر الأطعمة فائدة للصحة. يحتوي السمك على مجموعة واسعة من العناصر الغذائية الأساسية التي يحتاجها الجسم. في هذا المقال، نستعرض أهم الفوائد الصحية لتناول السمك الطازج بانتظام.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-6">
                1. غني بالأوميغا 3
              </h3>
              <p>
                السمك مصدر ممتاز للأحماض الدهنية أوميغا 3، وهي دهون صحية ضرورية لصحة القلب والدماغ. تساعد أوميغا 3 على تقليل خطر الإصابة بأمراض القلب والأوعية الدموية، وتحسين وظائف الدماغ، وتقليل الالتهابات في الجسم.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-6">
                2. بروتين عالي الجودة
              </h3>
              <p>
                السمك يحتوي على بروتين كامل وعالي الجودة، يحتوي على جميع الأحماض الأمينية الأساسية التي يحتاجها الجسم. البروتين ضروري لبناء العضلات، وإصلاح الأنسجة، وتقوية الجهاز المناعي. كما أن بروتين السمك سهل الهضم مقارنة باللحوم الحمراء.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-6">
                3. فيتامينات ومعادن أساسية
              </h3>
              <p>
                السمك غني بالعديد من الفيتامينات والمعادن المهمة مثل فيتامين D وفيتامين B12 واليود والسيلينيوم والزنك. فيتامين D ضروري لصحة العظام وامتصاص الكالسيوم، بينما فيتامين B12 مهم لصحة الأعصاب وإنتاج خلايا الدم الحمراء.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-6">
                4. يحسن صحة القلب
              </h3>
              <p>
                تناول السمك بانتظام يساعد على خفض ضغط الدم، وتقليل مستويات الكوليسترول الضار، وتحسين صحة الأوعية الدموية. الدراسات تشير إلى أن الأشخاص الذين يتناولون السمك مرتين أو أكثر في الأسبوع لديهم خطر أقل للإصابة بالنوبات القلبية والسكتات الدماغية.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-6">
                5. يدعم صحة الدماغ
              </h3>
              <p>
                الأحماض الدهنية أوميغا 3 الموجودة في السمك تلعب دوراً حيوياً في صحة الدماغ. تناول السمك يساعد على تحسين الذاكرة والتركيز، ويقلل من خطر الإصابة بالخرف ومرض الزهايمر مع التقدم في العمر. كما أنه مفيد لنمو دماغ الأطفال.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-6">
                6. يساعد في إنقاص الوزن
              </h3>
              <p>
                السمك منخفض السعرات الحرارية وغني بالبروتين، مما يجعله خياراً مثالياً لمن يرغبون في إنقاص الوزن أو الحفاظ على وزن صحي. البروتين يساعد على الشعور بالشبع لفترة أطول، ويعزز عملية الأيض في الجسم.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-6">
                7. يحسن صحة البشرة والشعر
              </h3>
              <p>
                الأحماض الدهنية والفيتامينات الموجودة في السمك تساعد على ترطيب البشرة، وتقليل الالتهابات الجلدية، وتعزيز صحة الشعر. السمك يحتوي أيضاً على مضادات الأكسدة التي تحمي البشرة من التلف.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-6">
                8. يقوي الجهاز المناعي
              </h3>
              <p>
                العناصر الغذائية في السمك مثل السيلينيوم والزنك وفيتامين D تساعد على تقوية الجهاز المناعي وحماية الجسم من الأمراض والعدوى. تناول السمك بانتظام يساهم في بناء دفاعات قوية ضد الأمراض.
              </p>

              <div className="bg-primary/10 p-6 rounded-lg mt-8">
                <p className="font-semibold text-primary text-xl">
                  استمتع بفوائد السمك الطازج مع عالم السمك!
                </p>
                <p className="mt-2">
                  نقدم لك أطيب الأسماك الطازجة الغنية بالعناصر الغذائية لصحة أفضل لك ولعائلتك.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
