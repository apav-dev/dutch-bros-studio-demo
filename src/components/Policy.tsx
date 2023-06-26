export interface PolicyProps {
  name?: string;
  description?: string;
}

export const initialProps: PolicyProps = {
  name: "Policy Name",
  description: "Policy Description",
};

const Policy = ({ name, description }: PolicyProps) => {
  return (
    <div
      key={name}
      className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center"
    >
      <dt>
        <span className="mt-4 text-sm font-medium text-gray-900">{name}</span>
      </dt>
      <dd className="mt-1 text-sm text-gray-500">{description}</dd>
    </div>
  );
};

export default Policy;
