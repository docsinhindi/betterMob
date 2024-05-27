import Container from "@/components/layout/page-layout";
import Image from "next/image";

const OurPower = () => {
  return (
    <Container className="py-28 space-y-10 border-t border-b">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <h2 className="font-bold text-6xl">Together we are strong</h2>
        <div>
          <p className="text-2xl font-medium">
            Our crew is always getting bigger, but we all work toward one goal:
            to make sales success not only possible but inevitable for teams
            everywhere.
          </p>
          <br />
          <p className="text-lg">
            In 2022, at vero eos et accusamus et iusto odio dignissimos ducimus
            qui blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus id quod maxime placeat
            facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus. Temporibus autem quibusdam et aut officiis debitis aut
            rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint
            et molestiae non recusandae. Itaque earum rerum hic tenetur a
            sapiente delectus, ut aut reiciendis voluptatibus maiores alias
            consequatur aut perferendis doloribus asperiores repellat.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-start">
        <div className="flex items-center gap-3">
          <Image
            src={"/home/png/user-logo.png"}
            alt="commentator"
            width={48}
            height={48}
          />
          <div>
            <h3 className="font-bold text-base">Muhammed Usman</h3>
            <p className="font-normal text-base">Founder & CEO</p>
          </div>
        </div>
        <p className="text-5xl">
          “Our goal is to build software that gives customer-facing teams at
          SMBs the ability to create fruitful and enduring relationships with
          customers.”
        </p>
      </div>
    </Container>
  );
};

export default OurPower;
