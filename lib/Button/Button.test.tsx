import { render } from "@testing-library/react";
import { Button } from "./Button";

describe(`Component ${Button.name}`, () => {
  it("should render", () => {
    const { container } = render(<Button>Button</Button>);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <button
          class="ant-btn css-dev-only-do-not-override-1fumvat ant-btn-default _button_0e63a0"
          type="button"
        >
          <span>
            Button
          </span>
        </button>
      </div>
    `);
  });
});
