// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9Wy1b3THTSs75bMR8UrtAP
// Component: 3mB51ra2YqyZPa
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_consulting.module.css"; // plasmic-import: 9Wy1b3THTSs75bMR8UrtAP/projectcss
import sty from "./PlasmicCompletedInteractionButton.module.css"; // plasmic-import: 3mB51ra2YqyZPa/css

export const PlasmicCompletedInteractionButton__VariantProps = new Array();

export const PlasmicCompletedInteractionButton__ArgProps = new Array();

function PlasmicCompletedInteractionButton__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const currentUser = p.useCurrentUser?.() || {};
  return (
    <button
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.button,
        projectcss.__wab_text,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        sty.root
      )}
    >
      {"Click me"}
    </button>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicCompletedInteractionButton__ArgProps,
          internalVariantPropNames:
            PlasmicCompletedInteractionButton__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicCompletedInteractionButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCompletedInteractionButton";
  } else {
    func.displayName = `PlasmicCompletedInteractionButton.${nodeName}`;
  }
  return func;
}

export const PlasmicCompletedInteractionButton = Object.assign(
  // Top-level PlasmicCompletedInteractionButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicCompletedInteractionButton
    internalVariantProps: PlasmicCompletedInteractionButton__VariantProps,
    internalArgProps: PlasmicCompletedInteractionButton__ArgProps
  }
);

export default PlasmicCompletedInteractionButton;
/* prettier-ignore-end */
