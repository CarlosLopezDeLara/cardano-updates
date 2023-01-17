"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[5853],{3480:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"2023-01-13-network","metadata":{"permalink":"/cardano-updates/quarterly/2023-01-13-network","editUrl":"https://github.com/input-output-hk/cardano-updates/tree/main/quarterly/2023-01-13-network.md","source":"@site/quarterly/2023-01-13-network.md","title":"Network Quarterly Update","description":"Network Quarterly Update","date":"2023-01-13T00:00:00.000Z","formattedDate":"January 13, 2023","tags":[{"label":"network","permalink":"/cardano-updates/quarterly/tags/network"}],"readingTime":4.125,"hasTruncateMarker":false,"authors":[{"name":"Marcin Szamotulski","title":"Network Team Lead","url":"https://github.com/coot","imageURL":"https://github.com/coot.png","key":"coot"}],"frontMatter":{"title":"Network Quarterly Update","slug":"2023-01-13-network","authors":"coot","tags":["network"],"hide_table_of_contents":false},"nextItem":{"title":"Open-Source Update","permalink":"/cardano-updates/quarterly/2023-01-13-open-source"}},"content":"## Network Quarterly Update\\n## 2022-11 - 2023-01\\n\\n### Summary\\n\\nThe primary goal of the networking team was to focus on the single relay\\nrelease of P2P.  We fixed a number of small late bugs, and concluded QA\\n& performance testing.  Although it was discovered a regression in performance\\nof  block production when P2P is enabled, relaying with P2P performs better\\ncomparing to a non p2p.  We concluded that this is not a blocker for the Single\\nRelay Release which is planned shortly.\\n\\n[Peer sharing][pr #4019] has gone through review and final review is\\njust being done right now.  After merging it will still be disabled (hidden\\nbehind a flag) as it\'s not safe without eclipse evasion.  We started\\nimplementing light peer sharing (i.e. include inbound peers into known peer set\\nof the outbound governor).\\n\\nWe started a detailed eclipse evasion design, it will continue in the next\\nquarter.\\n\\nWe also made a major revision of package structure of the network packages.  We\\nended up with a very clean dependency graph ([pr #4155]).\\n\\nArmando Santos delivered a talk at the [ODOPIS 2022] conference on principles\\nof distributed systems in Brussels.  The slides are available [here][ODOPIS-slides].\\n\\nNeil Davies gave an invited seminar on `DeltaQ` at Universit\xe9 Catholique de\\nLouvain.\\n\\nWe also found and fixed a few of bugs:\\n\\n* a bug in keep alive mini-protocol which resulted in warm to cold transitions\\n  to be always executed through a timeout path rather than do a clean demotion\\n  ([pr #4168]).\\n\\n* fixed an assetion failure in the outbound governor ([issue #4177]) \\n\\n- we fixed DNS test failure [issue #4191]\\n\\n### Next steps\\n\\nWe will work towards the next release of P2P for block producer nodes.  This includes:\\n\\n* analysing performance regression for BP nodes when using P2P\\n* finish the work on controlling the block forger through node kernel ([pr #3800])\\n* address [issue #3907] and write a script to analyse deployment of P2P relays\\n\\nWe would like also to push forward eclipse evasion.   Although most of the work\\nhas be done already the release of `io-sim` on `Hackage` will happen in the\\nnext quarter.\\n\\nWe would also like to address [chain-sync timeout issue][issue #4244] recently\\ndiagnosed by Karl Knutsson.\\n\\nIf time permits we would also like to address some technical debt, especially:\\n\\n- [enable nothunk in diffusion tests][issue #3387]\\n- [refactor diffusion testnet simulation][issue #4085]\\n\\n### Risks\\n\\nThe performance regression for block producer with P2P needs to be investigated\\nin the near future.  This is blocker for the release of P2P on BP nodes.\\n\\n### Detailed log\\n\\n#### Contributions to Ouroboros-Network\\n\\n- We added `TraceDemoteLocalAsynchronous`, which enables notification of critical issues for SPOs\\n- We fixed `cardano-ping` compatibility with `NodeToNodeV_10` (P2P, [pr #4165])\\n- We fixed a bug in demotion peers to cold which affected P2P nodes ([commit-61058aa5c2])\\n- Karl Knutsson enhanced `SendFetchRequest` ([commit-bb1c3dddee]), open-source contribution)\\n- We turned `SizeInBytes` into a newtype.\\n- We extended `CONTRIBUTING.md`, `README.md`, added `CODE_OF_CONDUCT`.\\n- We fixed DNS test failure [issue #4191]\\n- We fixed a simulation bug found in [issue #4258]\\n- [pr #4168]\\n- [issue #4177]\\n\\n#### Contributions to Cardano-Node\\n\\n- We maintained the Single Relay Release [pr #4612], (e.g. fixing CI issues,\\n  Rebasing it when necessary, publishing packages to Cardano Haskell Packages);\\n- We enhanced `JSON` serialisation / deserialisation of `NodeToNodeVersion` and `NodeToClientVersion`;\\n\\n#### Contributions to IOSim\\n\\n- We started to use Cardano Haskell Packages for `IOSim` ([pr #48])\\n- We updated change log files\\n- We added support of `ghc-9.4` ([pr #50])\\n\\nWe also addressed the following issues in [pr #57] in order to prepare the package for publication on Hackage:\\n\\n- refactored `io-classes` timers API ([issue #46]);\\n- created a new package `si-timers` which exposes an interface using SI units\\n  and is safe on 32-bit systems ([issue #59]);\\n- added monad transformers instances for classes defined in `io-classes` ([issue #58]);\\n- created `io-classes-mtl` package which includes (experimental) instances for monad transformers;\\n- provide `MonadMonotonicTimeNSec` in `io-classes` and `MonadMonotonicTime` in `si-timers` (so that `io-classes` follow the `base` package);\\n- added  `registerCancellableDelay` in `si-timers` (which allowed us to hide fancy timer api and clean `io-classes`)\\n- added support for `js_HOST_ARCH` (the new GHC JS backend)\\n\\nNote the [pr #57] contains almost 40 commits, and was a major step forward for\\n`io-sim` ecosystem.  We also prepared a draft [pr #4281] which updates\\n`ouroboros-network`.\\n\\nOther changes for `1.0.0.0` release on Hackage:\\n\\n- Refactored test suite ([pr #47])\\n- Updated documentation, cabal files, `CONTRIBUTING`, `SECURITY` documents, etc in [pr #60], currently under review.\\n\\n[commit-61058aa5c2]: https://github.com/input-output-hk/ouroboros-network/pull/4170/commits/61058aa5c28a144d723aae183d1745552d757334\\n[commit-bb1c3dddee]: https://github.com/input-output-hk/ouroboros-network/pull/4170/commits/bb1c3dddeea78949f531c144bb4f2669eddf7f47\\n[issue #3387]: https://github.com/input-output-hk/ouroboros-network/issues/3387\\n[issue #3907]: https://github.com/input-output-hk/ouroboros-network/issues/3907\\n[issue #4085]: https://github.com/input-output-hk/ouroboros-network/issues/4085\\n[issue #4168]: https://github.com/input-output-hk/ouroboros-network/issues/4168\\n[issue #4177]: https://github.com/input-output-hk/ouroboros-network/issues/4177\\n[issue #4191]: https://github.com/input-output-hk/ouroboros-network/issues/4191\\n[issue #4244]: https://github.com/input-output-hk/ouroboros-network/issues/4244\\n[issue #4258]: https://github.com/input-output-hk/ouroboros-network/issues/4258\\n[issue #46]: https://github.com/input-output-hk/io-sim/issues/46\\n[issue #58]: https://github.com/input-output-hk/io-sim/issues/58\\n[issue #59]: https://github.com/input-output-hk/io-sim/issues/59\\n[pr #3800]: https://github.com/input-output-hk/ouroboros-network/pull/3800\\n[pr #4019]: https://github.com/input-output-hk/ouroboros-network/pull/4019\\n[pr #4155]: https://github.com/input-output-hk/ouroboros-network/pull/4155\\n[pr #4165]: https://github.com/input-output-hk/ouroboros-network/pull/4165\\n[pr #4281]: https://github.com/input-output-hk/cardano-node/pull/4281\\n[pr #4612]: https://github.com/input-output-hk/cardano-node/pull/4612\\n[pr #47]: https://github.com/input-output-hk/io-sim/pull/47\\n[pr #48]: https://github.com/input-output-hk/io-sim/pull/48\\n[pr #49]: https://github.com/input-output-hk/io-sim/pull/49\\n[pr #50]: https://github.com/input-output-hk/io-sim/pull/50\\n[pr #57]: https://github.com/input-output-hk/io-sim/pull/57\\n[pr #60]: https://github.com/input-output-hk/io-sim/pull/60\\n[ODOPIS 2022]: https://sites.uclouvain.be/OPODIS2022/armando-details.html\\n[ODOPIS-slides]: https://sites.uclouvain.be/OPODIS2022/slides/OPODIS2022-slides-Santos.pdf"},{"id":"2023-01-13-open-source","metadata":{"permalink":"/cardano-updates/quarterly/2023-01-13-open-source","editUrl":"https://github.com/input-output-hk/cardano-updates/tree/main/quarterly/2023-01-13-open-source.md","source":"@site/quarterly/2023-01-13-open-source.md","title":"Open-Source Update","description":"Open Source Quarterly Update","date":"2023-01-13T00:00:00.000Z","formattedDate":"January 13, 2023","tags":[{"label":"open-source","permalink":"/cardano-updates/quarterly/tags/open-source"}],"readingTime":2.215,"hasTruncateMarker":false,"authors":[{"name":"Marcin Szamotulski","title":"Network Team Lead","url":"https://github.com/coot","imageURL":"https://github.com/coot.png","key":"coot"}],"frontMatter":{"title":"Open-Source Update","slug":"2023-01-13-open-source","authors":"coot","tags":["open-source"],"hide_table_of_contents":false},"prevItem":{"title":"Network Quarterly Update","permalink":"/cardano-updates/quarterly/2023-01-13-network"},"nextItem":{"title":"Consensus Quarterly Update","permalink":"/cardano-updates/quarterly/2022-11-15-consensus"}},"content":"## Open Source Quarterly Update\\n## 2022-11 - 2023-01\\n\\n### Summary\\n\\nIn the last quarter the open-source initiative delivered a comprehensive report\\non the state of our repositories.  As part of this work stream we\\nidentified the key open-source repositories for the cardano project across all\\nthe projects  From a list of more than 500 repositories (some of which are\\nforks) we identified key repositories which constitute the core of Cardano.\\n20 of them were identified as to be transferred to the future MBO which will\\ngovern Cardano development.  Some where excluded (like [`io-sim`] and\\n[`typed-protocols`]), to be govern by IOG, since they have a much broader\\napplication than Cardano itself, and thus we think their open-source future\\nwill be better outside of the Cardano umbrella.\\n\\nChristian Taylor identified a number of ways we can improve our repositories to\\nmake them more attractive for open-source contributions by analysing each of\\nthem.  This includes adding or improving various documentation files, like\\n`CONTRIBUTING` files, adding code of conduct, improving readme files, issue\\n& pull request templates etc.  Christian also computed various interesting\\nmetrics which gives a very good insight into the development practices: e.g.\\naverage merge ratio, average number of reviews, comments and many more!  The\\npresentation is available [here][open-source-presentation].\\n\\nWe followed with work on the [Cardano Engineering Handbook][CEH].  We included\\na standard code of conduct which is now used by most important projects in the\\nCardano space.  We included `cardano-node`\'s security policy and added\\na responsible disclosure policy.  We also described how roles and\\nresponsibilities should be clarified.  This progress was made by\\na collaborative effort of the Cardano Core, Plutus and Architecture teams, and\\nit wouldn\'t be possible without Michael Peyton Jones, Arnaud Bailly, Kevin\\nHammond, Jared Corduan and Marcin Szamotulski.\\n\\nWe also improved the documentation of key repositories, by adding description,\\nimproving their `README` file & `CONTRIBUTING` files, adding code of conducts\\nfollowing the [Cardano Engineering Handbook][CEH].  This includes improvements to:\\n\\n* [`ouroboros-network`] (both `network` & `consensus`)\\n* [`cardano-ledger`]\\n* [`cardano-node`]\\n\\nAnd also\\n\\n* [`io-sim`]\\n* [`typed-protocols`]\\n* [`cardano-prelude`] (work in progress)\\n\\nThe work was carried by Marcin Szamotulski, Addie Girouard and  Jared Corduan. \\n\\n\\nIn this quarter we also identified a number of projects which can be published to\\n`Hackage` (Haskell\'s package repository) or `crate` (Rust package repository).\\nThe list contains 21 packages, 2 of which ([`hedgehog-extras`] and\\n[`quickcheck-dynamic`]) are already published on Hackage and another 5 (from\\nthe [`io-sim`] repository) are close to be published.\\n\\n\\n### Detailed log\\n\\nThe progress of the open-source project is tracked in [this project][open-source-project].\\n\\n[CEH]: https://input-output-hk.github.io/cardano-engineering-handbook/\\n[open-source-project]: https://github.com/orgs/input-output-hk/projects/60/views/1\\n[`cardano-ledger`]: https://github.com/input-output-hk/cardano-ledger\\n[`cardano-node`]: https://github.com/input-output-hk/cardano-node\\n[`cardano-prelude`]: https://github.com/input-output-hk/cardano-prelude\\n[`hedgehog-extras`]: https://hackage.haskell.org/package/hedgehog-extras\\n[`io-sim`]: https://github.com/input-output-hk/io-sim\\n[`ouroboros-network`]: https://github.com/input-output-hk/ouroboros-network\\n[`quickcheck-dynamic`]: https://hackage.haskell.org/package/quickcheck-dynamic\\n[`typed-protocols`]: https://github.com/input-output-hk/typed-protocols\\n[open-source-presentation]: https://docs.google.com/presentation/d/127IFEavlrZeeoFrVXFYWzSt0ugOkSL7isxjyM1vmMzQ"},{"id":"2022-11-15-consensus","metadata":{"permalink":"/cardano-updates/quarterly/2022-11-15-consensus","editUrl":"https://github.com/input-output-hk/cardano-updates/tree/main/quarterly/2022-11-15-consensus.md","source":"@site/quarterly/2022-11-15-consensus.md","title":"Consensus Quarterly Update","description":"Consensus Quarterly Update","date":"2022-11-15T00:00:00.000Z","formattedDate":"November 15, 2022","tags":[{"label":"consensus","permalink":"/cardano-updates/quarterly/tags/consensus"}],"readingTime":3.655,"hasTruncateMarker":false,"authors":[{"name":"Damian Nadales","title":"Consensus Team Lead","url":"https://github.com/dnadales","imageURL":"https://github.com/dnadales.png","key":"dnadales"}],"frontMatter":{"title":"Consensus Quarterly Update","slug":"2022-11-15-consensus","authors":"dnadales","tags":["consensus"],"hide_table_of_contents":false},"prevItem":{"title":"Open-Source Update","permalink":"/cardano-updates/quarterly/2023-01-13-open-source"},"nextItem":{"title":"Network Team Update","permalink":"/cardano-updates/quarterly/2022-11-09-network"}},"content":"## Consensus Quarterly Update\\n## 2022-09 - 2022-11\\n\\n### Main achievements\\n\\n#### UTxO HD\\n\\n- As a consequence of the errors observed when running distributed mempool\\n  benchmarks, we re-designed the UTxO HD mempool integration, which fixed these\\n  errors and lead to a simpler and more maintainable design.\\n\\n- We focused on increasing test coverage for the UTxO-HD prototype. In\\n  particular, we added property tests for:\\n  - Backing store (work ongoing)\\n  - Era transitions\\n\\n- The property tests we added uncovered several bugs, which is a great result\\n  given the exponential increase in the cost of finding bugs as they are closer\\n  to deployment.\\n\\n- One of the errors found by our tests required us to work on improvements in\\n  the Haskell bindings for LMDB. This work is ongoing.\\n\\n- We started working on the mempool property tests that will exercise the new\\n  code paths that UTxO HD introduced.\\n\\n- We developed, benchmarked and tested an implementation of sequences of\\n  differences based on \\"anti-diffs\\". Performance results of diff sequence\\n  operations show that we achieved a speedup of about `4x` across several\\n  scenarios. Note: this speedup is taking into account diff sequence operations\\n  only, so the consensus-wide speedup is less than `4x`.\\n\\n- We integrated the \\"anti-diff\\" prototype into the UTxO HD feature branch.\\n\\n#### Genesis\\n\\n- We wrote a simulator that demonstrates soundness of an abstract implementation\\n  of the new chain selection rule.\\n- We elaborated a draft specification for the Genesis implementation (currently\\n  awaiting feedback from other architects).\\n- We elaborated a draft specification for the ChainSync Jumping optimization. In\\n  particular, this includes a proof sketch that the latter preserves liveness\\n  and safety in all cases.\\n- With the Networking team, we co-designed the eclipse avoidance mechanism,\\n  specifically its coherence with the Genesis implementation plan\'s security\\n  and its dependence on the new ChainSync Jumping optimization.\\n- We implemented a prototype for ChainSync Jumping. Initial benchmarks showed a\\n  performance degradation wrt the baseline. Our optimization attempts so far\\n  have brought the performance closer to the baseline, but not yet to parity.\\n\\n#### Conway era\\n\\n- We did most of the heavy lifting required to integrate the Conway era into the\\n  Consensus layer.\\n\\n#### Technical debt\\n\\n- We started working on enabling CI nightly tests, which revealed several test\\n  failures due to thunks being found it data structures used by the ledger and\\n  consensus. We made a lot of progress fixing those thunk errors, but some\\n  errors still remain.\\n\\n- We elaborated a `db-analyser` benchmark for the ledger operations. This led us\\n  to the identification of high processing time at epoch boundaries, and we\\n  could not observe any performance degradation that can be attributed to era\\n  changes.\\n\\n- We fixed a source of flakiness in the ChainDB QSM test.\\n\\n- We clarified a common source of confusion around VRF tie-breaking and\\n  cross-era chain selection.\\n\\n- We fixed a bug in the maximum-allowed ledger major protocol version.\\n\\n#### Fostering collaboration\\n\\n- We spent time making `cardano-updates` the central source of information for\\n  the core teams stakeholders.\\n- We went through the Galois gap analysis and extracted actionable points to\\n  take on next.\\n- Bart and Yogesh continued with their onboarding and stated making substantial\\n  contributions to consensus.\\n\\n### Next steps\\n\\n#### UTxO HD\\n\\n- Finish the mempool property tests.\\n- Benchmark the latest version of the prototype.\\n- Elaborate a document that describes new integration test scenarios and pass it\\n  to the SDET team.\\n- Bring query UTxO by address command performance on par with the baseline\\n  version.\\n\\n#### Genesis\\n\\n- Receive and incorporate Duncan\'s feedback on the first draft specification for\\n  the Genesis implementation.\\n- Begin prototyping the first genesis implementation, unless the first draft\\n  needs major changes.\\n- Draft a second revision of the Genesis report.\\n- Review the second revision with a wider audience, which includes at least\\n  Alexander Russell. That feedback will drive a third and hopefully final\\n  revision.\\n- Investigate how to mitigate the ~30% slowdown we have observed so far in the\\n  ChainSync jumping prototype, and try to mitigate it. In particular, we might\\n  need to optimize the existing BlockFetch logic.\\n\\n#### Tech debt\\n\\n- Enabling nightly CI tests.\\n\\n#### Fostering collaboration\\n\\n- Merge the tutorial document Galois wrote; requires CI integration.\\n- Come up with our own documentation improvements, many of which were suggested\\n  in the Galois gap analysis.\\n- Try to hire a new team member."},{"id":"2022-11-09-network","metadata":{"permalink":"/cardano-updates/quarterly/2022-11-09-network","editUrl":"https://github.com/input-output-hk/cardano-updates/tree/main/quarterly/2022-11-09-network.md","source":"@site/quarterly/2022-11-09-network.md","title":"Network Team Update","description":"Network Quarterly Update","date":"2022-11-09T00:00:00.000Z","formattedDate":"November 9, 2022","tags":[{"label":"network","permalink":"/cardano-updates/quarterly/tags/network"}],"readingTime":3.87,"hasTruncateMarker":false,"authors":[{"name":"Marcin Szamotulski","title":"Network Team Lead","url":"https://github.com/coot","imageURL":"https://github.com/coot.png","key":"coot"}],"frontMatter":{"title":"Network Team Update","slug":"2022-11-09-network","authors":"coot","tags":["network"],"hide_table_of_contents":false},"prevItem":{"title":"Consensus Quarterly Update","permalink":"/cardano-updates/quarterly/2022-11-15-consensus"},"nextItem":{"title":"Ledger Team Update","permalink":"/cardano-updates/quarterly/2022-11-07-ledger"}},"content":"## Network Quarterly Update\\n## 2022-09 - 2022-11\\n\\n### Summary of most important improvements\\n\\nDuring this quarter the networking team delivered low level specification of\\npeer sharing & eclipse evasion.  We held a session with the consensus & the\\nscientists; we got a positive feedback on the design.\\n\\nFurther we focused on implementation of peer sharing.  We produced a [detail\\ndesign][peer-sharing-design] and an [early implementation][peer-sharing-pr].\\n\\nWe prepared the _P2P Single Relay Release_ (`cardano-node-1.35.5`).  It\\nincludes over [130 patches][p2p-release] of network stack improvements over the\\nprevious version `1.35.4`, which were accomplished over a longer period of\\ntime.  Among them are both bug fixes and UX improvements for stake pool\\noperators like simplified format of the [topology file][topology-file], or\\nimprovements in the logged messages:\\n\\n* [tracing of early consensus exceptions][consensus-startup-trace]\\n* [tracing of demotion of local root peers][demotion-trace] (traced with\\n  `Warning` severity), the trace is called `TraceDemoteLocalAsynchronous`, in\\n  `json` format it is encoded as `DemoteLocalAsynchronous`.  For an SPO\\n  tracking these demotion is vital (such demotion could indicate that a block\\n  producer is no longer connected to its relays or vice versa)\\n\\nWe also provide better integration with [systemd][socket-activation] (socket\\nactivation improvements) or improvements in the networking stack:\\n\\n* [exit policies][exit-policy],\\n* [peer metrics improvements][peer-metrics],\\n* [DNS TTL][dns-ttl] improvements (which make it harder to misconfigure the\\n  system, an issue discovered by the performance & monitoring team),\\n* do not trigger inbound idle timeout for `node-to-client` connections ([pr\\n  #3844][idle-timeout]), an issue reported to us by Matthias Benkort from\\n  Cardano Foundation.\\n\\nDuncan has been making progress with the input endorsers demo. His simulation\\nprovides a useful animated visualisation and live quantification of behaviour\\nof the modeled design.\\n\\nWe also improved our e2e diffusion simulation by implementing header-body\\nsplit, similar to what the real implementation does.\\n\\nWe also made some advances towards our future goals of P2P release for block\\nproducer nodes ([pr #3800][pr-3800] - in review) & for Daedalus users\\n([pr #3690][pr-3690] - merged).\\n\\n### Detailed log\\n\\n* We expanded diffusion simulation with block-fetch protocol bringing it closer\\n  to the production system.\\n\\n* We addressed some additional technical depth in diffusion simulation\\n\\n* We slightly improved documentation & CI of io-sim and typed-protocols\\n  repositories for open-source contributors.\\n\\n* We closed a number of issues towards publishing io-sim on Hackage (only two\\n  essential issues are left open).\\n\\n* We pushed a branch of typed-protocols which captures one of the developer UX\\n  problems in the API which we need to solve.\\n\\n* We identified and fixed an issue related to systemd sockets.\\n\\n* We identified and fixed an issue in consensus initialisation not giving\\n  feedback on early errors.\\n\\n* We deployed RT View, identified a number of issues which were communicated to\\n  the performance & monitoring team.\\n\\n* We finished high level & detailed design of peer sharing, very early\\n  implementation of peer sharing is done (note that peer sharing cannot be\\n  safely deployed without eclipse evasion & genesis).\\n\\n* We finished high level design of eclipse evasion, and started working on\\n  a detailed design.\\n\\n* We were assigned the role of release engineer for 1.35.5 release (the P2P\\n  single relay release); we prepared a cardano-node for 1.35.5 release which\\n  contains more than 130 patches of just network stack improvements done over\\n  last few months.\\n\\n* We diagnosed and fixed an tricky bug in the peer state actions (a component\\n  which sits between outbound governor and connection manager). That bug was\\n  introduced earlier this year and never released. It was caught by the QA\\n  testing framework. We expanded our diffusion simulation to cover such case and\\n  also mitigated a chance for reintroducing such a bug in future.\\n\\n* We identified and quite likely mitigated a misconfiguration in the\\n  benchmarking cluster (next benchmarking run will confirm our hypothesis).\\n\\n* We simplified the format of p2p topology file, we got positive feedback from\\n  SPOs.\\n\\n* We raised severities of some of the logging messages, which is an important\\n  improvement for SPOs, exchanges and other users of the system.\\n\\n* We worked on input endorsers simulation which gives both animated and\\n  quantified live feedback on network operation, using a simplified model of\\n  a TCP/IP network. \\n\\n## Next quarter\\n\\n* Release the Single Relay P2P Release `1.35.5`.\\n\\n* Carry on with Peer Sharing (review, testing).\\n\\n* Deliver a talk at [Conference on Principles of Distributed Systems 2022][OPODIS2022] in Brussels, Belgium.\\n\\n* Present Detailed Design of Eclipse Evasion and start implementation phase.\\n\\n* Work on P2P Block Producer release.\\n\\n* Carry on with publishing of `io-sim` on `Hackage`.\\n\\n[OPODIS2022]: https://sites.uclouvain.be/OPODIS2022/ \\n[peer-sharing-design]: https://github.com/input-output-hk/ouroboros-network/wiki/Peer-Sharing-Implementation-Plan\\n[peer-sharing-pr]: https://github.com/input-output-hk/ouroboros-network/pull/4019\\n[p2p-release]: https://github.com/input-output-hk/ouroboros-network/pull/4120\\n[exit-policy]: https://github.com/input-output-hk/ouroboros-network/pull/3785\\n[peer-metrics]: https://github.com/input-output-hk/ouroboros-network/pull/3915\\n[socket-activation]: https://github.com/input-output-hk/ouroboros-network/pull/3979\\n[topology-file]: https://github.com/input-output-hk/cardano-node/pull/4563\\n[dns-ttl]: https://github.com/input-output-hk/ouroboros-network/pull/4106\\n[consensus-startup-trace]: https://github.com/input-output-hk/ouroboros-network/pull/4015\\n[demotion-trace]: https://github.com/input-output-hk/ouroboros-network/pull/4127\\n[idle-timeout]: https://github.com/input-output-hk/ouroboros-network/pull/3844\\n[pr-3800]: https://github.com/input-output-hk/ouroboros-network/pull/3800\\n[pr-3690]: https://github.com/input-output-hk/ouroboros-network/issues/3968"},{"id":"2022-11-07-ledger","metadata":{"permalink":"/cardano-updates/quarterly/2022-11-07-ledger","editUrl":"https://github.com/input-output-hk/cardano-updates/tree/main/quarterly/2022-11-07-ledger.md","source":"@site/quarterly/2022-11-07-ledger.md","title":"Ledger Team Update","description":"Ledger Quarterly Update","date":"2022-11-07T00:00:00.000Z","formattedDate":"November 7, 2022","tags":[{"label":"ledger","permalink":"/cardano-updates/quarterly/tags/ledger"}],"readingTime":1.255,"hasTruncateMarker":false,"authors":[{"name":"Jared Corduan","title":"Ledger Team Lead","url":"https://github.com/JaredCorduan","imageURL":"https://github.com/JaredCorduan.png","key":"JaredCorduan"}],"frontMatter":{"title":"Ledger Team Update","slug":"2022-11-07-ledger","authors":"JaredCorduan","tags":["ledger"],"hide_table_of_contents":false},"prevItem":{"title":"Network Team Update","permalink":"/cardano-updates/quarterly/2022-11-09-network"},"nextItem":{"title":"Node API & CLI Team Update","permalink":"/cardano-updates/quarterly/2022-10-07-node-cli-api"}},"content":"## Ledger Quarterly Update\\n## 2022-09 - 2022-11-04\\n\\n* We finished a minimal ledger era capable of master key rotation.\\n  This will be re-purposed our upcoming work.\\n* We have the humble beginnings of a proper ledger API.\\n* We improved the problematic cost model serialization\\n  (recall the song and dance about updating the cost model one epoch after the hard fork).\\n* We have added benchmarks for problematic areas.\\n* Massive repository restructure and cleanup.\\n  * Unified and consistent variable name schemes (not completely finished, but nearly there).\\n  * Massive reduction in type constraints, which causes a lot of developer friction,\\n    in our code and also downstream.\\n  * More organized module structures.\\n  * Improved generators for our property tests.\\n  * We removed our dependency on cardano-prelude.\\n* The formal ledger model has come a long way.\\n  * We created a fork of Agda that provides some meta-programming support for the ledger rules.\\n  * We have a large amount of the basic UTxO support in the model.\\n  * We can generate a good looking PDF from the model.\\n  * We can produce Haskell from the model.\\n  * We have a nice finite set theory library that we can use for many of the ledger rules.\\n  * We have nix support for the model.\\n\\n## Next steps\\n\\n  * Individual tracking of deposits. [[issue-3113]]\\n  * Versioned CBOR encoders/decoders. [[issue-3014]]\\n  * New ledger era transaction body (and the surround work associated with it).\\n  * Designs for the next ledger era.\\n\\n[issue-3113]: https://github.com/input-output-hk/cardano-ledger/issues/3113\\n[issue-3014]: https://github.com/input-output-hk/cardano-ledger/issues/3014"},{"id":"2022-10-07-node-cli-api","metadata":{"permalink":"/cardano-updates/quarterly/2022-10-07-node-cli-api","editUrl":"https://github.com/input-output-hk/cardano-updates/tree/main/quarterly/2022-11-07-nod-api-cli.md","source":"@site/quarterly/2022-11-07-nod-api-cli.md","title":"Node API & CLI Team Update","description":"Node-Api-Cli Quarterly Update","date":"2022-11-07T00:00:00.000Z","formattedDate":"November 7, 2022","tags":[{"label":"cli-api-quarterly","permalink":"/cardano-updates/quarterly/tags/cli-api-quarterly"}],"readingTime":1.355,"hasTruncateMarker":false,"authors":[{"name":"Jordan Millar","title":"Node Team Lead","url":"https://github.com/Jimbo4350","imageURL":"https://github.com/Jimbo4350.png","key":"Jimbo4350"}],"frontMatter":{"title":"Node API & CLI Team Update","slug":"2022-10-07-node-cli-api","authors":"Jimbo4350","tags":["cli-api-quarterly"],"hide_table_of_contents":false},"prevItem":{"title":"Ledger Team Update","permalink":"/cardano-updates/quarterly/2022-11-07-ledger"}},"content":"## Node-Api-Cli Quarterly Update\\n## 2022-09 - 2022-11-04\\n\\n- Various improvements to tests/CI/GHC 9.2.4 preparations/upgrade to cabal-3.8.1.0\\n- Major clean up of stale iusses + PRs.\\n- Implementation of stale-bot to mitigate against a proliferation of outdated issues and PRs\\n- cardano-api refactoring with the aim of exposing more user friendly functions, particularly concerning transaction construction and querying the node.\\n- cardano-cli refactoring with the aim of moving reusable functions to cardano-api. We have made strides here and have managed to improve the interface of transaction construction and validation.\\n- General documentation updates and improvements\\n- Addition of tx-mempool command which allows users to:\\n  - Query the node about the current mempool\'s capacity and sizes\\n  - Request the next transaction from the mempool\'s current list\\n  - Query if a particular transaction exists in the mempool\\n-  Initial refactoring of cardano-testnet\\n\\nNext quarter\\n\\n- cardano-api\\n  - Working with Konstantinos and his team to make cardano-api better for dapp developers - we have a google doc for this, I can send it to you privately.\\n- cardano-testnet\\n  - Working with Marc Fontaine to create an easy to use executable to deploy testnets locally - https://github.com/input-output-hk/cardano-node/issues/4598\\n- Serenity\\n  - Continued refactoring of cardano-api and cardano-cli, with the particular focus on extracting re-usable components of cardano-cli and moving them to cardano-api. This is harder to define but will manifest in stuff moving from cardano-cli to cardano-api and is tied in to the cardano-api work specified above.\\n- General bug fixing and smaller feature requests for the api/cli that are always coming in. Robert is primarily handling this at the moment as he is relatively new."}]}')}}]);