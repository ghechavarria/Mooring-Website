# Site layout

Single production layout (formerly “Final look”).

## Section order

Hero → Production Glance → Problem (`01`) → Features (`02`) → Pipeline (`03`) → Memory (`04`) → Assistant → End to end (includes LOS) → Blueprint band → Team → Contact

## Notes

- Hero uses the product-dense live-workspace placement
- Marketing sections use bold brand presentation (navy bands, display type)
- Production Glance sits under the hero’s blue ticker strip
- Light marketing bands mix neumorphism, glass, neo-brutalism, and Swiss grid
- Team uses upright rounded portraits (no polaroid tilt)
- Team is a 4 + 3 centered grid

## Key files

| Path | Role |
|------|------|
| [`src/App.tsx`](../src/App.tsx) | Section order |
| [`src/index.css`](../src/index.css) | Section rhythm + shell |
| [`src/components/ProductionGlanceSection.tsx`](../src/components/ProductionGlanceSection.tsx) | Production glance band |
| [`src/components/BrokerProcessFlowSection.tsx`](../src/components/BrokerProcessFlowSection.tsx) | End to end |
| [`src/components/TeamSection.tsx`](../src/components/TeamSection.tsx) | Team grid |
