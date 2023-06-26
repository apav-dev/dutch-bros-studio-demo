export interface PoliciesProps {
  // name?: string;
  // // image?: string;
  // description?: string;
  policies: {
    name: string;
    description: string;
  }[];
}

export const initialProps: PoliciesProps = {
  // name: "Policy Name",
  // image:
  //   "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  // description: "Policy Description",
  policies: [{ name: "policy 1", description: "policy description" }],
};

const Policies = ({ policies }: PoliciesProps) => {
  // <section aria-labelledby="policies-heading" className="mt-10">
  //   <h2 id="policies-heading" className="sr-only">
  //     Our Policies
  //   </h2>

  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
    {policies.map((policy) => (
      <div
        key={policy.name}
        className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center"
      >
        <dt>
          {/* <policy.icon
          className="mx-auto h-6 w-6 flex-shrink-0 text-gray-400"
          aria-hidden="true"
        /> */}
          <span className="mt-4 text-sm font-medium text-gray-900">
            {policy.name}
          </span>
        </dt>
        <dd className="mt-1 text-sm text-gray-500">{policy.description}</dd>
      </div>
    ))}
  </div>;
  // </section>;
};

export default Policies;
