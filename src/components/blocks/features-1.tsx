import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Settings2, Sparkles, Zap, ArrowRight, Target, Brain, Shield } from 'lucide-react'
import { ReactNode } from 'react'

export function Features() {
    return (
        <section className="bg-transparent py-16 md:py-32">
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="text-center mb-12 md:mb-20">
                    <div className="flex flex-col items-center mb-6">
                        <h2 className="text-balance text-3xl font-serif font-black text-[#0F1B3D] uppercase leading-tight lg:text-5xl">
                            Menos esforço, mais verdade.
                        </h2>
                        <p className="text-balance text-2xl font-serif font-black text-[#0F1B3D] uppercase leading-tight lg:text-4xl italic">
                            O fim da autossabotagem.
                        </p>
                    </div>
                    <p className="mt-4 text-[#0F1B3D]/70 font-sans font-light">O método EF foca na estrutura, não apenas nos sintomas.</p>
                </div>
                <div className="mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:mt-16">
                    <Card className="group bg-white/80 border-[#0F1B3D]/10 backdrop-blur-sm hover:bg-white transition-all duration-500 shadow-black-950/5">
                        <CardHeader className="pb-3 flex flex-col items-center text-center">
                            <CardDecorator>
                                <Brain className="size-6 text-[#0F1B3D]" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-6 font-serif text-xl text-[#0F1B3D]">Identificação da Raiz das Crenças</h3>
                        </CardHeader>

                        <CardContent className="text-center">
                            <p className="text-sm text-[#0F1B3D]/70 font-sans font-light">Não atuamos no sintoma. Usamos a PNL para encontrar e ressignificar a crença limitante raiz que gera seus padrões repetitivos.</p>
                        </CardContent>
                    </Card>

                    <Card className="group bg-white/80 border-[#0F1B3D]/10 backdrop-blur-sm hover:bg-white transition-all duration-500 shadow-black-950/5">
                        <CardHeader className="pb-3 flex flex-col items-center text-center">
                            <CardDecorator>
                                <Target className="size-6 text-[#0F1B3D]" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-6 font-serif text-xl text-[#0F1B3D]">PNL Sistêmica e Avançada</h3>
                        </CardHeader>

                        <CardContent className="text-center">
                            <p className="text-sm text-[#0F1B3D]/70 font-sans font-light">Estratégias mentais para reprogramação de padrões emocionais e comportamentais em tempo recorde.</p>
                        </CardContent>
                    </Card>

                    <Card className="group bg-white/80 border-[#0F1B3D]/10 backdrop-blur-sm hover:bg-white transition-all duration-500 shadow-black-950/5">
                        <CardHeader className="pb-3 flex flex-col items-center text-center">
                            <CardDecorator>
                                <Shield className="size-6 text-[#0F1B3D]" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-6 font-serif text-xl text-[#0F1B3D]">Alinhamento de Valores Pessoais</h3>
                        </CardHeader>

                        <CardContent className="text-center">
                            <p className="text-sm text-[#0F1B3D]/70 font-sans font-light">Coerência absoluta entre o que você sente, pensa e como se posiciona. Viva de acordo com seus valores inegociáveis.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
    <div aria-hidden className="relative mx-auto size-36 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
        <div className="absolute inset-0 [--border:rgba(15,27,61,0.08)] bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:24px_24px] opacity-30"/>
        <div className="bg-[#FAF8F4] absolute inset-0 m-auto flex size-12 items-center justify-center border-t border-l border-[#0F1B3D]/20">{children}</div>
    </div>
)
