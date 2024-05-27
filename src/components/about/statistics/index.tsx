import Container from "@/components/layout/page-layout";

const Statistics = () => {
  return (
    <Container className="py-10">
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <li className="space-y-2">
          <p className="font-medium text-lg">
            Team member vero eos et accusamus et iusto odio dignissimos ducimus
            qui blanditiis.{" "}
          </p>
          <span className="block text-8xl font-bold">290+</span>
        </li>
        <li className="space-y-2">
          <p className="font-medium text-lg">
            Team member vero eos et accusamus et iusto odio dignissimos ducimus
            qui blanditiis.{" "}
          </p>
          <span className="block text-8xl font-bold">290+</span>
        </li>
        <li className="space-y-2">
          <p className="font-medium text-lg">
            Team member vero eos et accusamus et iusto odio dignissimos ducimus
            qui blanditiis.{" "}
          </p>
          <span className="block text-8xl font-bold">290+</span>
        </li>
      </ul>
    </Container>
  );
};

export default Statistics;
