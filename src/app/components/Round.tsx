type RoundProps = {
  round: number;
};

function Round({ round }: RoundProps) {
  return (
    <div className="w-full flex items-center justify-center flex-col gap-2 py-3">
      <span className="text-xl text-primary">Round</span>
      <span className="text-6xl lg:text-7xl text-primary">{round}</span>
    </div>
  );
}

export default Round;
