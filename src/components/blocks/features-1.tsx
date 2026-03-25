import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Zap, Brain, Shield, Compass } from 'lucide-react'
import { ReactNode } from 'react'

export function Features() {
    return (
        <section className="bg-transparent py-16 md:py-32">
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="text-center mb-12 md:mb-20">
                    <div className="flex flex-col items-center mb-6">
                        <p className="text-xs tracking-[0.25em] uppercase text-[#0F1B3D]/40 font-medium mb-4">
                            O método
                        </p>
                        <h2 className="text-balance text-3xl font-serif font-black text-[#0F1B3D] uppercase leading-tight lg:text-5xl">
                            Volta Pra Casa
                        </h2>
                    </div>

                    <div className="mt-6 space-y-4 text-left max-w-2xl mx-auto">
                        <p className="text-[#0F1B3D]/80 font-sans font-light text-base md:text-lg leading-relaxed">
                            Foi exatamente ao perceber isso que eu criei o método <strong className="text-[#0F1B3D] font-medium">Volta Pra Casa</strong>.
                        </p>
                        <p className="text-[#0F1B3D]/70 font-sans font-light text-base md:text-lg leading-relaxed">
                            Depois de acompanhar muitos processos de transformação, ficou claro para mim que o verdadeiro problema quase nunca está nas metas ou nas decisões que você tenta tomar.
                        </p>
                        <p className="text-[#0F1B3D] font-serif italic text-lg md:text-xl text-center py-2">
                            Ele está na raiz que está conduzindo sua vida.
                        </p>
                        <p className="text-[#0F1B3D]/70 font-sans font-light text-base md:text-lg leading-relaxed">
                            O método Volta Pra Casa é um processo profundo de reconexão com quem você realmente é — trazendo consciência sobre suas crenças, seus valores e sobre a identidade que você quer viver.
                        </p>
                        <p className="text-[#0F1B3D]/80 font-sans font-medium text-base md:text-lg leading-relaxed">
                            Quando isso se reorganiza dentro de você, a vida muda de direção.
                        </p>
                    </div>
                </div>

                <div className="mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:mt-16">
                    <Card className="group bg-white/80 border-[#0F1B3D]/10 backdrop-blur-sm hover:bg-white transition-all duration-500 shadow-black-950/5">
                        <CardHeader className="pb-3 flex flex-col items-center text-center">
                            <CardDecorator>
                                <Zap className="size-6 text-[#0F1B3D]" aria-hidden />
                            </CardDecorator>
                            <h3 className="mt-6 font-serif text-lg text-[#0F1B3D]">Você recupera poder para agir</h3>
                        </CardHeader>
                        <CardContent className="text-center">
                            <p className="text-sm text-[#0F1B3D]/70 font-sans font-light">Deixa de reagir e passa a conduzir sua própria vida com intenção e presença.</p>
                        </CardContent>
                    </Card>

                    <Card className="group bg-white/80 border-[#0F1B3D]/10 backdrop-blur-sm hover:bg-white transition-all duration-500 shadow-black-950/5">
                        <CardHeader className="pb-3 flex flex-col items-center text-center">
                            <CardDecorator>
                                <Brain className="size-6 text-[#0F1B3D]" aria-hidden />
                            </CardDecorator>
                            <h3 className="mt-6 font-serif text-lg text-[#0F1B3D]">Você tem clareza para tomar decisões</h3>
                        </CardHeader>
                        <CardContent className="text-center">
                            <p className="text-sm text-[#0F1B3D]/70 font-sans font-light">As dúvidas que travavam suas escolhas dão lugar a uma direção clara e alinhada.</p>
                        </CardContent>
                    </Card>

                    <Card className="group bg-white/80 border-[#0F1B3D]/10 backdrop-blur-sm hover:bg-white transition-all duration-500 shadow-black-950/5">
                        <CardHeader className="pb-3 flex flex-col items-center text-center">
                            <CardDecorator>
                                <Compass className="size-6 text-[#0F1B3D]" aria-hidden />
                            </CardDecorator>
                            <h3 className="mt-6 font-serif text-lg text-[#0F1B3D]">As oportunidades começam a aparecer</h3>
                        </CardHeader>
                        <CardContent className="text-center">
                            <p className="text-sm text-[#0F1B3D]/70 font-sans font-light">Quando você está alinhado com quem realmente é, o caminho se abre naturalmente.</p>
                        </CardContent>
                    </Card>

                    <Card className="group bg-white/80 border-[#0F1B3D]/10 backdrop-blur-sm hover:bg-white transition-all duration-500 shadow-black-950/5">
                        <CardHeader className="pb-3 flex flex-col items-center text-center">
                            <CardDecorator>
                                <Shield className="size-6 text-[#0F1B3D]" aria-hidden />
                            </CardDecorator>
                            <h3 className="mt-6 font-serif text-lg text-[#0F1B3D]">Você se torna sua prioridade</h3>
                        </CardHeader>
                        <CardContent className="text-center">
                            <p className="text-sm text-[#0F1B3D]/70 font-sans font-light">Seus valores, sua identidade e suas decisões passam a caminhar na mesma direção.</p>
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
