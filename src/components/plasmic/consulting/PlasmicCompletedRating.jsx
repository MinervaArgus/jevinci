// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9Wy1b3THTSs75bMR8UrtAP
// Component: n1Dlz6lKXfrAP
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
import sty from "./PlasmicCompletedRating.module.css"; // plasmic-import: n1Dlz6lKXfrAP/css
import Icon10Icon from "./icons/PlasmicIcon__Icon10"; // plasmic-import: e3A5LhMW5LMBww/icon

export const PlasmicCompletedRating__VariantProps = new Array();

export const PlasmicCompletedRating__ArgProps = new Array();

function PlasmicCompletedRating__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const currentUser = p.useCurrentUser?.() || {};
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        sty.root
      )}
    >
      <Icon10Icon
        className={classNames(projectcss.all, sty.svg__khFyu)}
        role={"img"}
      />

      <Icon10Icon
        className={classNames(projectcss.all, sty.svg__eojIu)}
        role={"img"}
      />

      <Icon10Icon
        className={classNames(projectcss.all, sty.svg__hZjzu)}
        role={"img"}
      />

      <Icon10Icon
        className={classNames(projectcss.all, sty.svg__mPLT)}
        role={"img"}
      />

      <Icon10Icon
        className={classNames(projectcss.all, sty.svg__bOb3F)}
        role={"img"}
      />
    </p.Stack>
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
          internalArgPropNames: PlasmicCompletedRating__ArgProps,
          internalVariantPropNames: PlasmicCompletedRating__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicCompletedRating__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCompletedRating";
  } else {
    func.displayName = `PlasmicCompletedRating.${nodeName}`;
  }
  return func;
}

export const PlasmicCompletedRating = Object.assign(
  // Top-level PlasmicCompletedRating renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicCompletedRating
    internalVariantProps: PlasmicCompletedRating__VariantProps,
    internalArgProps: PlasmicCompletedRating__ArgProps
  }
);

export default PlasmicCompletedRating;
/* prettier-ignore-end */
