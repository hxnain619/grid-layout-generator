import GridLayoutCanvas from "../../components/GridLayoutCanvas";

const GridGenerator = () => {
    return (
        <div id="grid-generator" className="relative min-h-screen mb-10 py-10 overflow-hidden">
            <div className="absolute animate-pulse hidden md:block text-[1020px] -top-[400px] -left-0 font-extrabold text-brand-primary/30 z-0">
                i
            </div>
            <GridLayoutCanvas />
        </div>
    )
}

export default GridGenerator;