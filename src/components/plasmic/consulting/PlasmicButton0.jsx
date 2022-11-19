// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9Wy1b3THTSs75bMR8UrtAP
// Component: Hr_6ToVJwC3nf
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_consulting.module.css"; // plasmic-import: 9Wy1b3THTSs75bMR8UrtAP/projectcss
import sty from "./PlasmicButton0.module.css"; // plasmic-import: Hr_6ToVJwC3nf/css

export const PlasmicButton0__VariantProps = new Array("type");

export const PlasmicButton0__ArgProps = new Array();

function PlasmicButton0__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const currentUser = p.useCurrentUser?.() || {};
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "type",
        type: "private",
        initFunc: ($props, $state) => $props["type"]
      }
    ],

    [$props]
  );

  const $state = p.useDollarState(stateSpecs, $props);
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.__wab_text,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        sty.root,
        {
          [sty.roottype_danger]: hasVariant($state, "type", "danger"),
          [sty.roottype_primary]: hasVariant($state, "type", "primary")
        }
      )}
    >
      {"Click me"}
    </div>
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
          internalArgPropNames: PlasmicButton0__ArgProps,
          internalVariantPropNames: PlasmicButton0__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicButton0__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicButton0";
  } else {
    func.displayName = `PlasmicButton0.${nodeName}`;
  }
  return func;
}

export const PlasmicButton0 = Object.assign(
  // Top-level PlasmicButton0 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicButton0
    internalVariantProps: PlasmicButton0__VariantProps,
    internalArgProps: PlasmicButton0__ArgProps
  }
);

export default PlasmicButton0;
/* prettier-ignore-end */
