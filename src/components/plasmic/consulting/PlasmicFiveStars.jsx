// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9Wy1b3THTSs75bMR8UrtAP
// Component: wI7VqDrN5kTemK
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
import sty from "./PlasmicFiveStars.module.css"; // plasmic-import: wI7VqDrN5kTemK/css
import Icon10Icon from "./icons/PlasmicIcon__Icon10"; // plasmic-import: e3A5LhMW5LMBww/icon

export const PlasmicFiveStars__VariantProps = new Array();

export const PlasmicFiveStars__ArgProps = new Array();

function PlasmicFiveStars__RenderFunc(props) {
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
        className={classNames(projectcss.all, sty.svg__fqFvi)}
        role={"img"}
      />

      <Icon10Icon
        className={classNames(projectcss.all, sty.svg__zmOqz)}
        role={"img"}
      />

      <Icon10Icon
        className={classNames(projectcss.all, sty.svg__rRnf1)}
        role={"img"}
      />

      <Icon10Icon
        className={classNames(projectcss.all, sty.svg__vWfyq)}
        role={"img"}
      />

      <Icon10Icon
        className={classNames(projectcss.all, sty.svg__y13Vw)}
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
          internalArgPropNames: PlasmicFiveStars__ArgProps,
          internalVariantPropNames: PlasmicFiveStars__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicFiveStars__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFiveStars";
  } else {
    func.displayName = `PlasmicFiveStars.${nodeName}`;
  }
  return func;
}

export const PlasmicFiveStars = Object.assign(
  // Top-level PlasmicFiveStars renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicFiveStars
    internalVariantProps: PlasmicFiveStars__VariantProps,
    internalArgProps: PlasmicFiveStars__ArgProps
  }
);

export default PlasmicFiveStars;
/* prettier-ignore-end */
