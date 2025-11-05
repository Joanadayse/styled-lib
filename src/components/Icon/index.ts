

// Basta importar todos os ícones com o sufixo ?react
import Search from './icons/Icon-search.svg?react';
import ArrowLeft from './icons/Icon-ArrowLeft.svg?react';
import CheckCircle from './icons/Icon-check-circle.svg?react';
import ChevronDown from './icons/Icon-chevron-down.svg?react';
import ChevronLeft from './icons/Icon-chevron-left.svg?react';
import ChevronRight from './icons/Icon-chevron-right.svg?react';
import ChevronUp from './icons/Icon-chevron-up.svg?react';
import Download from './icons/Icon-download.svg?react';
import Graphic from './icons/Icon-graphic.svg?react';
import History from './icons/Icon-history.svg?react';
import List from './icons/Icon-list.svg?react';
import Logout from './icons/Icon-log-out.svg?react';
import Plus from './icons/Icon-plus.svg?react';
import UserStar from './icons/Icon-user-star.svg?react';
import Monitor from './icons/monitor.svg?react';
import MoreVertical from './icons/more-vertical.svg?react';
import Projetor from './icons/projetor.svg?react';
import Tomada from './icons/tomada.svg?react';
import Trash from './icons/trash.svg?react';
import Wifi from './icons/wifi.svg?react';
import IconX from './icons/x.svg?react';
import CalendarIcon from './icons/Icon-calendar.svg?react';
import Codepen from './icons/codepen.svg?react';
import Eye from './icons/eye.svg?react';
import FileText from './icons/file-text.svg?react';
import Filter from './icons/filter.svg?react';
import ImportProduct from './icons/icon-import-product.svg?react';
import Message from './icons/icon-message.svg?react';
import NewProduct from './icons/icon-new-product.svg?react';
import Rate from './icons/icon-rate.svg?react';
import Alert from './icons/Icon-alert-circle.svg?react';
import Maximize from './icons/maximize-2.svg?react';
import Shopping from './icons/shopping-cart.svg?react';
import TrendingUp from './icons/trending-up.svg?react';
import Truck from './icons/truck.svg?react';
import AlertDown from './icons/file-down-alert.svg?react';
import ReviewAlert from './icons/file-review-alert.svg?react';
import CheckAlert from './icons/check-alert.svg?react';
import TrashAlert from './icons/trash-alert.svg?react';
import ErrorAlert from './icons/error-alert.svg?react';
import AwardIcon from './icons/Icon-award.svg?react';
import type { FC, SVGProps } from 'react';

// ✅ Exporta todos os ícones
export {
  Search,
  ArrowLeft,
  CheckCircle,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Download,
  Graphic,
  History,
  List,
  Logout,
  Plus,
  UserStar,
  Monitor,
  MoreVertical,
  Projetor,
  Tomada,
  Trash,
  Wifi,
  IconX,
  CalendarIcon,
  Codepen,
  Eye,
  FileText,
  Filter,
  ImportProduct,
  Message,
  NewProduct,
  Rate,
  Alert,
  Maximize,
  Shopping,
  TrendingUp,
  Truck,
  AlertDown,
  ReviewAlert,
  CheckAlert,
  TrashAlert,
  ErrorAlert,
  AwardIcon,
};

// ✅ Tipo genérico para quem quiser usar via prop tipada
export type IconType = FC<SVGProps<SVGSVGElement>>;
