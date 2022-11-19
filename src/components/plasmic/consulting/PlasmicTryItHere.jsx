// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9Wy1b3THTSs75bMR8UrtAP
// Component: xl4RZW1_mqe377
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import WorkspaceLabel from "../../WorkspaceLabel"; // plasmic-import: vnUhbGjOR4fdLd/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_consulting.module.css"; // plasmic-import: 9Wy1b3THTSs75bMR8UrtAP/projectcss
import sty from "./PlasmicTryItHere.module.css"; // plasmic-import: xl4RZW1_mqe377/css

export const PlasmicTryItHere__VariantProps = new Array();

export const PlasmicTryItHere__ArgProps = new Array();

function PlasmicTryItHere__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const currentUser = p.useCurrentUser?.() || {};
  return (
    <WorkspaceLabel
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames("__wab_instance", sty.root)}
    >
      <div
        data-plasmic-name={"text"}
        data-plasmic-override={overrides.text}
        className={classNames(projectcss.all, projectcss.__wab_text, sty.text)}
      >
        {"Try it here:"}
      </div>
    </WorkspaceLabel>
  );
}

const PlasmicDescendants = {
  root: ["root", "text"],
  text: ["text"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicTryItHere__ArgProps,
          internalVariantPropNames: PlasmicTryItHere__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicTryItHere__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTryItHere";
  } else {
    func.displayName = `PlasmicTryItHere.${nodeName}`;
  }
  return func;
}

export const PlasmicTryItHere = Object.assign(
  // Top-level PlasmicTryItHere renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicTryItHere
    internalVariantProps: PlasmicTryItHere__VariantProps,
    internalArgProps: PlasmicTryItHere__ArgProps
  }
);

export default PlasmicTryItHere;
/* prettier-ignore-end */