import { ListItemIcon } from "@mui/material";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { FixedSizeList } from "react-window";

function RenderRow({ index, name, className, iconUrl }) {
  return (
    <ListItem key={index} component="div" disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <img className={className} src={iconUrl} alt={name} />
        </ListItemIcon>
        <ListItemText primary={`Item ${index + 1}`} title={name} />
      </ListItemButton>
    </ListItem>
  );
}

export default function VirtualizedList({ technologies }) {
  return (
    <Box
      sx={{
        width: "100%",
        height: 400,
        maxWidth: 360,
        bgcolor: "background.paper",
      }}
    >
      <FixedSizeList
        height={400}
        width={360}
        itemSize={46}
        itemCount={200}
        overscanCount={5}
      >
        {technologies.map((tech, index) => {
          const { name, className, iconUrl } = tech;
          return (
            <RenderRow
              name={name}
              className={className}
              iconUrl={iconUrl}
              index={index}
            />
          );
        })}
      </FixedSizeList>
    </Box>
  );
}
